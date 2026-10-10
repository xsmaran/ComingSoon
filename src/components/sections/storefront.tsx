"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { StoreView } from "@/lib/three/nookaa-scene";
import { images } from "@/lib/assets";

const views: { key: StoreView; label: string; description: string; image: typeof images.storeExterior }[] = [
  { key: "exterior", label: "Storefront", description: "The brown entrance frame, warm gold Nookaa sign, glass doors and bamboo tree.", image: images.storeExterior },
  { key: "counter", label: "The counter", description: "The curved coffee counter, marble floor, espresso machine and warm ceiling grid.", image: images.storeCounter },
];

/** Real Three.js geometry with a local photo fallback while loading or without WebGL. */
export function Storefront({ className }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const changeView = useRef<((view: StoreView) => void) | null>(null);
  const selectedView = useRef<StoreView>("exterior");
  const [view, setView] = useState<StoreView>("exterior");
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let cancelled = false;
    let teardown: (() => void) | undefined;
    let started = false;

    async function start() {
      if (started || cancelled) return;
      started = true;
      // Let the brief intro finish before compiling the heavier WebGL scene.
      // The local store photo remains available while the renderer initializes.
      if (document.querySelector(".nookaa-preloader")) {
        await new Promise<void>((resolve) => window.setTimeout(resolve, 4250));
      }
      if (cancelled) return;
      try {
        const [THREE, { OrbitControls }, { RoomEnvironment }, { createNookaaScene, storeViews }] = await Promise.all([
          import("three"),
          import("three/addons/controls/OrbitControls.js"),
          import("three/addons/environments/RoomEnvironment.js"),
          import("@/lib/three/nookaa-scene"),
        ]);
        if (cancelled || !container) return;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "low-power" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        renderer.domElement.setAttribute("aria-hidden", "true");
        renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:pan-y;";
        const model = createNookaaScene();
        const pmrem = new THREE.PMREMGenerator(renderer);
        const room = new RoomEnvironment();
        const environment = pmrem.fromScene(room, 0.04);
        model.scene.environment = environment.texture;
        model.scene.environmentIntensity = 0.52;
        room.dispose();
        pmrem.dispose();
        const exteriorFov = (aspect: number, desktop: boolean) => desktop
          ? THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(30) / 2) * Math.max(1, 1.5 / aspect)))
          : 38;
        const initialFov = selectedView.current === "exterior" ? 30 : 61;
        const camera = new THREE.PerspectiveCamera(initialFov, 1, 0.05, 160);
        const initial = storeViews[selectedView.current];
        camera.position.set(...initial.position);
        const target = new THREE.Vector3(...initial.target);
        camera.lookAt(target);
        const controls = new OrbitControls(camera, renderer.domElement);
        const pointer = window.matchMedia("(pointer: fine)");
        controls.enableDamping = true;
        controls.dampingFactor = 0.055;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableRotate = pointer.matches && selectedView.current === "exterior";
        controls.rotateSpeed = 0.35;
        controls.minPolarAngle = 0.65;
        controls.maxPolarAngle = 1.48;
        controls.minAzimuthAngle = -0.72;
        controls.maxAzimuthAngle = 0.72;
        controls.target.copy(target);
        setFinePointer(pointer.matches);
        container.appendChild(renderer.domElement);
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const destination = new THREE.Vector3(...initial.position);
        let targetFov = initialFov;
        let moving = false;
        let visible = true;
        const stopMoving = () => { moving = false; };
        controls.addEventListener("start", stopMoving);

        const compose = () => {
          const desktop = window.matchMedia("(min-width: 1200px)").matches;
          // The scene has its own column; center it within the available canvas.
          camera.clearViewOffset();
          targetFov = selectedView.current === "exterior" ? exteriorFov(camera.aspect, desktop) : 61;
        };
        const resize = () => {
          const width = Math.max(container.clientWidth, 1);
          const height = Math.max(container.clientHeight, 1);
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          compose();
          if (!moving) camera.fov = targetFov;
          camera.updateProjectionMatrix();
          // Resizing clears the drawing buffer, even if the offscreen render loop is paused.
          renderer.render(model.scene, camera);
        };
        resize();
        const sizeObserver = new ResizeObserver(resize);
        sizeObserver.observe(container);
        model.setView(selectedView.current);

        changeView.current = (nextView) => {
          const next = storeViews[nextView];
          model.setView(nextView);
          destination.set(...next.position);
          target.set(...next.target);
          compose();
          controls.enableRotate = pointer.matches && nextView === "exterior";
          moving = !reducedMotion.matches;
          if (!moving) {
            camera.position.copy(destination);
            controls.target.copy(target);
            camera.fov = targetFov;
            camera.updateProjectionMatrix();
          }
        };
        const render = () => {
          if (!visible || document.hidden) return;
          if (moving) {
            camera.position.lerp(destination, 0.065);
            controls.target.lerp(target, 0.065);
            camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, 0.065);
            camera.updateProjectionMatrix();
            if (camera.position.distanceTo(destination) < 0.006) moving = false;
          }
          if (selectedView.current === "exterior") controls.update();
          else camera.lookAt(controls.target);
          renderer.render(model.scene, camera);
        };
        const visibilityObserver = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          renderer.setAnimationLoop(visible && !document.hidden ? render : null);
        });
        visibilityObserver.observe(container);
        const pageVisibility = () => renderer.setAnimationLoop(visible && !document.hidden ? render : null);
        document.addEventListener("visibilitychange", pageVisibility);
        const contextLost = (event: Event) => {
          event.preventDefault();
          renderer.setAnimationLoop(null);
          setStatus("fallback");
        };
        renderer.domElement.addEventListener("webglcontextlost", contextLost);
        teardown = () => {
          changeView.current = null;
          renderer.setAnimationLoop(null);
          sizeObserver.disconnect();
          visibilityObserver.disconnect();
          document.removeEventListener("visibilitychange", pageVisibility);
          renderer.domElement.removeEventListener("webglcontextlost", contextLost);
          controls.removeEventListener("start", stopMoving);
          controls.dispose();
          model.dispose();
          environment.dispose();
          renderer.dispose();
          renderer.forceContextLoss();
          renderer.domElement.remove();
        };
        if (cancelled) teardown();
        else {
          render();
          renderer.setAnimationLoop(render);
          setStatus("ready");
        }
      } catch (error) {
        teardown?.();
        console.warn("Nookaa store preview: displaying the reference image.", error);
        if (!cancelled) setStatus("fallback");
      }
    }
    const loadObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { loadObserver.disconnect(); void start(); }
    }, { rootMargin: "200px" });
    loadObserver.observe(container);
    return () => { cancelled = true; loadObserver.disconnect(); teardown?.(); };
  }, []);

  const current = views.find((item) => item.key === view)!;
  return (
    <div className={cn("nookaa-stage", className)}>
      <div className="nookaa-stage__viewport">
        <div ref={host} className="absolute inset-0" role="img" aria-label={current.description} />
        {status !== "ready" && (
          <div className="absolute inset-0" aria-hidden="true">
            <Image src={current.image.src} fill alt="" sizes="100vw" preload unoptimized className="object-cover" />
            {status === "loading" && <p className="absolute inset-x-0 bottom-[112px] text-center font-chiron text-[12px] text-brown">Preparing the store preview…</p>}
          </div>
        )}
        <div className="nookaa-stage__shade" aria-hidden="true" />
      </div>
      <div className="nookaa-stage__controls" role="group" aria-label="Explore Nookaa">
        {views.map(({ key, label }) => (
          <button key={key} type="button" aria-pressed={view === key}
            className={cn("min-h-11 whitespace-nowrap rounded-full border px-4 py-2.5 font-chiron text-[12px]/[18px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brown md:px-5 md:text-[13px]", view === key ? "border-brown bg-brown text-[#f5f1e9]" : "border-transparent bg-transparent text-brown hover:border-brown/25 hover:bg-brown/5")}
            onClick={() => { selectedView.current = key; setView(key); changeView.current?.(key); }}>
            {label}
          </button>
        ))}
      </div>
      <p className="nookaa-stage__hint font-chiron text-[11px]/[18px] text-brown/70" aria-live="polite">
        {status === "ready" && view === "exterior" && finePointer ? "Drag gently to explore · choose a view to step inside" : "Explore the outlet and pickup counter"}
      </p>
    </div>
  );
}
