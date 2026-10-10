module.exports = [
(()=>{"use strict";return[
"[project]/src/components/sections/navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$enquiries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/enquiries.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$brand$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/brand-logo.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function EnquiryDropdown({ pathname }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const active = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$enquiries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enquiryLinks"].some((link)=>pathname === link.href);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const outside = (e)=>{
            if (e.target instanceof Node && !root.current?.contains(e.target)) setOpen(false);
        };
        const escape = (e)=>{
            if (e.key === "Escape") {
                setOpen(false);
                button.current?.focus();
            }
        };
        document.addEventListener("pointerdown", outside);
        document.addEventListener("keydown", escape);
        return ()=>{
            document.removeEventListener("pointerdown", outside);
            document.removeEventListener("keydown", escape);
        };
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: root,
        className: "nookaa-nav__enquiry",
        onBlur: (e)=>{
            if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: button,
                type: "button",
                "aria-expanded": open,
                "aria-controls": id,
                className: `nookaa-nav__link nookaa-nav__enquiry-trigger ${active ? "is-active" : ""}`,
                onClick: ()=>setOpen((value)=>!value),
                onKeyDown: (e)=>{
                    if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setOpen(true);
                        requestAnimationFrame(()=>root.current?.querySelector("a")?.focus());
                    }
                },
                children: [
                    "Enquiry ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: open ? "is-open" : "",
                        "aria-hidden": "true",
                        children: "⌄"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/navbar.tsx",
                        lineNumber: 25,
                        columnNumber: 395
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/navbar.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: id,
                className: "nookaa-nav__dropdown",
                hidden: !open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "LET’S TALK NOOKAA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/navbar.tsx",
                        lineNumber: 27,
                        columnNumber: 7
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$enquiries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enquiryLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            "aria-current": pathname === link.href ? "page" : undefined,
                            onClick: ()=>setOpen(false),
                            children: [
                                link.label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    children: "↗"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/navbar.tsx",
                                    lineNumber: 28,
                                    columnNumber: 174
                                }, this)
                            ]
                        }, link.href, true, {
                            fileName: "[project]/src/components/sections/navbar.tsx",
                            lineNumber: 28,
                            columnNumber: 33
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/navbar.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/navbar.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "nookaa-nav",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Main",
            className: "nookaa-nav__inner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    "aria-label": "Nookaa home",
                    className: "nookaa-nav__brand",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$brand$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandLogo"], {}, void 0, false, {
                            fileName: "[project]/src/components/sections/navbar.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "nookaa-nav__tagline",
                            children: "A little sip of happy."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/navbar.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/navbar.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nookaa-nav__links",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navLinks"].map(({ href, label })=>{
                            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                "aria-current": active ? "page" : undefined,
                                className: `nookaa-nav__link ${active ? "is-active" : ""}`,
                                children: label
                            }, href, false, {
                                fileName: "[project]/src/components/sections/navbar.tsx",
                                lineNumber: 45,
                                columnNumber: 20
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EnquiryDropdown, {
                            pathname: pathname
                        }, pathname, false, {
                            fileName: "[project]/src/components/sections/navbar.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/navbar.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/menu",
                    className: "nookaa-nav__cta",
                    children: [
                        "Find your sip ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            children: "↗"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/navbar.tsx",
                            lineNumber: 50,
                            columnNumber: 70
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/navbar.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/navbar.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/navbar.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/preloader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Preloader",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$brand$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/brand-logo.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Preloader() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CupIntro, {}, pathname, false, {
        fileName: "[project]/src/components/sections/preloader.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
function CupIntro() {
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("fill");
    const cupClip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (preference.matches) {
            setStage("done");
            return;
        }
        setStage("fill");
        const exit = window.setTimeout(()=>setStage("exit"), 3250);
        const done = window.setTimeout(()=>setStage("done"), 3900);
        const stop = ()=>{
            if (preference.matches) setStage("done");
        };
        preference.addEventListener("change", stop);
        return ()=>{
            window.clearTimeout(exit);
            window.clearTimeout(done);
            preference.removeEventListener("change", stop);
        };
    }, []);
    if (stage === "done") return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: "nookaa-preloader nookaa-preloader--iced",
        initial: {
            opacity: 1
        },
        animate: {
            opacity: stage === "exit" ? 0 : 1
        },
        transition: {
            duration: .65,
            ease: "easeInOut"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nookaa-preloader__top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$brand$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrandLogo"], {}, void 0, false, {
                    fileName: "[project]/src/components/sections/preloader.tsx",
                    lineNumber: 36,
                    columnNumber: 44
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/preloader.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nookaa-preloader__center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "nookaa-preloader__art",
                        viewBox: "0 0 240 280",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                    id: cupClip,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M65 82h110l-13 143c-1 9-8 15-17 15H95c-9 0-16-6-17-15Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/preloader.tsx",
                                        lineNumber: 39,
                                        columnNumber: 38
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/preloader.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/preloader.tsx",
                                lineNumber: 39,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "120",
                                cy: "249",
                                rx: "60",
                                ry: "7",
                                fill: "#5d3b1f",
                                opacity: ".06"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/preloader.tsx",
                                lineNumber: 40,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m148 29-16 68",
                                stroke: "#5d3b1f",
                                strokeWidth: "6",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/preloader.tsx",
                                lineNumber: 41,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M65 82h110l-13 143c-1 9-8 15-17 15H95c-9 0-16-6-17-15Z",
                                fill: "#fffaf0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/preloader.tsx",
                                lineNumber: 42,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                clipPath: `url(#${cupClip})`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].rect, {
                                        x: "64",
                                        width: "112",
                                        height: "145",
                                        fill: "#b98459",
                                        initial: {
                                            y: 240
                                        },
                                        animate: {
                                            y: 119
                                        },
                                        transition: {
                                            delay: .3,
                                            duration: 1.5,
                                            ease: [
                                                .22,
                                                1,
                                                .36,
                                                1
                                            ]
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/preloader.tsx",
                                        lineNumber: 44,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].path, {
                                        d: "M63 119q18-6 37 0t37 0t39 0v9H63Z",
                                        fill: "#dec3a4",
                                        initial: {
                                            y: 121
                                        },
                                        animate: {
                                            y: 0
                                        },
                                        transition: {
                                            delay: .3,
                                            duration: 1.5,
                                            ease: [
                                                .22,
                                                1,
                                                .36,
                                                1
                                            ]
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/preloader.tsx",
                                        lineNumber: 45,
                                        columnNumber: 11
                                    }, this),
                                    [
                                        [
                                            81,
                                            101,
                                            -10
                                        ],
                                        [
                                            128,
                                            105,
                                            12
                                        ],
                                        [
                                            105,
                                            139,
                                            -6
                                        ]
                                    ].map(([x, y, rotate], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].g, {
                                            initial: {
                                                y: -18,
                                                opacity: 1
                                            },
                                            animate: {
                                                y: 0
                                            },
                                            transition: {
                                                delay: .45 + index * .22,
                                                duration: .8,
                                                ease: [
                                                    .22,
                                                    1,
                                                    .36,
                                                    1
                                                ]
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                transform: `rotate(${rotate} ${x + 16} ${y + 16})`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: x,
                                                        y: y,
                                                        width: "32",
                                                        height: "33",
                                                        rx: "6",
                                                        fill: "#e6f3f9",
                                                        fillOpacity: ".93",
                                                        stroke: "#9cbdc9",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/preloader.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: `M${x + 5} ${y + 12}v-6h12M${x + 7} ${y + 25}l17-15`,
                                                        stroke: "#fff",
                                                        strokeWidth: "2.5",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/preloader.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: `M${x + 22} ${y + 28}h5v-9`,
                                                        stroke: "#bbd6e0",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/preloader.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/preloader.tsx",
                                                lineNumber: 47,
                                                columnNumber: 13
                                            }, this)
                                        }, x, false, {
                                            fileName: "[project]/src/components/sections/preloader.tsx",
                                            lineNumber: 46,
                                            columnNumber: 92
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/preloader.tsx",
                                lineNumber: 43,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M65 82h110l-13 143c-1 9-8 15-17 15H95c-9 0-16-6-17-15Z",
                                stroke: "#5d3b1f",
                                strokeWidth: "2.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/preloader.tsx",
                                lineNumber: 54,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "120",
                                cy: "82",
                                rx: "59",
                                ry: "8",
                                fill: "#fffaf0",
                                stroke: "#5d3b1f",
                                strokeWidth: "2.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/preloader.tsx",
                                lineNumber: 55,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m148 29-13 53",
                                stroke: "#5d3b1f",
                                strokeWidth: "6",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/preloader.tsx",
                                lineNumber: 56,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "120",
                                cy: "203",
                                r: "28",
                                fill: "#f5f1e9",
                                stroke: "#ddcbb5",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/preloader.tsx",
                                lineNumber: 57,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                href: "/brand/official-otter.png",
                                x: "93",
                                y: "176",
                                width: "54",
                                height: "54",
                                preserveAspectRatio: "xMidYMid meet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/preloader.tsx",
                                lineNumber: 58,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/preloader.tsx",
                        lineNumber: 38,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "nookaa-preloader__eyebrow",
                        children: "SIP. CHILL. REPEAT."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/preloader.tsx",
                        lineNumber: 60,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nookaa-preloader__progress",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                            initial: {
                                scaleX: 0
                            },
                            animate: {
                                scaleX: 1
                            },
                            transition: {
                                duration: 3.25,
                                ease: "easeInOut"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/preloader.tsx",
                            lineNumber: 61,
                            columnNumber: 70
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/preloader.tsx",
                        lineNumber: 61,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        role: "status",
                        className: "sr-only",
                        children: "Preparing your Nookaa experience."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/preloader.tsx",
                        lineNumber: 62,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/preloader.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nookaa-preloader__bottom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "A LITTLE SIP OF HAPPY."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/preloader.tsx",
                        lineNumber: 64,
                        columnNumber: 47
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setStage("exit"),
                        children: [
                            "Skip intro ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/preloader.tsx",
                                lineNumber: 64,
                                columnNumber: 148
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/preloader.tsx",
                        lineNumber: 64,
                        columnNumber: 82
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/preloader.tsx",
                lineNumber: 64,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/preloader.tsx",
        lineNumber: 35,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ui/brand-logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandLogo",
    ()=>BrandLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-ssr] (ecmascript)");
;
;
function BrandLogo({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("nookaa-logo", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "nookaa-logo__name",
                children: "NOOKAA"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/brand-logo.tsx",
                lineNumber: 6,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "nookaa-logo__tagline",
                children: "Beverages & Beyond"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/brand-logo.tsx",
                lineNumber: 7,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/brand-logo.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ui/scroll-progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollProgress",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function ScrollProgress() {
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 140,
        damping: 30
    });
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        "aria-hidden": "true",
        className: "nookaa-scroll-progress",
        style: {
            scaleX: reduce ? scrollYProgress : scaleX
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-progress.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/lib/assets.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asset",
    ()=>asset,
    "doodles",
    ()=>doodles,
    "images",
    ()=>images,
    "isDoodleAsset",
    ()=>isDoodleAsset,
    "videos",
    ()=>videos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$doodles$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/doodles.json.[json].cjs [app-ssr] (ecmascript)");
;
/**
 * Every image and video used on the page.
 *
 * By default files are loaded from Framer's CDN (exactly what the original site uses).
 * To self-host them, run `npm run assets:download` (copies everything into /public/framer)
 * and set NEXT_PUBLIC_LOCAL_ASSETS=1 in your environment.
 */ const LOCAL = process.env.NEXT_PUBLIC_LOCAL_ASSETS === "1";
const CDN = "https://framerusercontent.com";
function asset(path) {
    return LOCAL ? `/framer/${path}` : `${CDN}/${path}`;
}
const doodles = Object.fromEntries(Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$doodles$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).map(([key, image])=>[
        key,
        {
            ...image,
            fit: "contain"
        }
    ]));
const isDoodleAsset = (image)=>image.fit === "contain";
function img(file, width, height) {
    return {
        src: asset(`images/${file}`),
        width,
        height
    };
}
/** Approved brand originals. Keep their pixels, colours and proportions unchanged. */ const mascot = {
    src: "/brand/otter-mascot.png",
    width: 457,
    height: 453
};
const storeExterior = {
    src: "/brand/store-exterior.jpeg",
    width: 1600,
    height: 900
};
const storeCounter = {
    src: "/brand/store-interior-counter.jpeg",
    width: 1600,
    height: 900
};
const storeSeating = {
    src: "/brand/store-interior-seating.jpeg",
    width: 1600,
    height: 900
};
const images = {
    mascot,
    storeExterior,
    storeCounter,
    storeSeating,
    sticker: img("KC3nUvLHFCakuLPKcNFjvjHpb4M.png", 500, 499),
    stickerCoffee: img("FhFmU2cQjvGW4sDtIsgZRSarg8.png", 133, 151),
    asterisk: img("EoIPN8fcgLhmiox8tEOc3RKqUCg.png", 1048, 1140),
    audience1: doodles.mug,
    audience2: doodles.laptop,
    audience3: doodles.student,
    scallopEdge: img("vMXRPFBxgqFAHLQkDMVuVu3dqPc.png", 5856, 287),
    gridPattern: img("HeviB0Hr9n08JSxcP7Vk4cEpcmw.png", 5760, 3972),
    benefit3: img("Z5HPfz3WtilyUrN2rYOprmf2Zn8.png", 1344, 756),
    prideDesktop: img("fgyDviBrznq1LKopfkddHu1QeI.png", 5772, 3344),
    prideMobile: img("YFoBpeWSr7btUGgy6Cs65jZm70Y.png", 1600, 2400),
    people1: img("sIqnpyHuT6e6aZoqHyYmPaebQ.png", 1024, 1024),
    people2: img("AfD4EbqRzNrhsVbHEzAHH0bcQ0.png", 1024, 1024),
    people3: img("7IgyG3qpsmBBwGtF0ilsZoosdTA.png", 1024, 1024),
    avatarOlivia: img("XjqhfE0v3hM6NYwybSFPDop20.png", 280, 280),
    avatarMark: img("nm2mYoxEyEZzKJYHLkucJLEaax0.png", 280, 280),
    avatarGary: img("YbO5JEDzRCy69RTBqomXZQyHQ.png", 280, 280),
    blog1: storeCounter,
    blog2: doodles.baker,
    blog3: img("YR8iXua90QcbCx6p80yVpjKXQc.png", 1277, 768),
    diamondStrip: img("USL9jvPb1knVcNUMoGA3AZV47iI.png", 5760, 136),
    // Non-character stickers that cycle inside the patterned "menu" backdrop (characters are the <Otter> mascot).
    illoFuelUp: img("yEezMicUYqc7f6Mxzt8wKidjd20.png", 940, 940),
    illoHello: img("DwSBVzhDzaRLpnkkB6QMjXnMY.png", 811, 571),
    illoTime: img("oTHE30568GkxuGvLjZLSgm1euRU.png", 814, 987),
    illoBag: img("PCGwwLkk3kdFTYZ3dZugYgnRo.png", 634, 828)
};
const videos = {
    testimonial1: asset("assets/Sdyc9uggMlNauakHU5S6vkDLw.mp4"),
    testimonial2: asset("assets/rvvv13crgl6U3ZvCmTYm6SfKw.mp4"),
    testimonial3: asset("assets/GHNldwXqSVz9RC8gIVPr7lc.mp4")
};
}),
"[project]/src/lib/beverage-menu.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "beverageAddOns",
    ()=>beverageAddOns,
    "beverageCategories",
    ()=>beverageCategories,
    "featuredCategories",
    ()=>featuredCategories,
    "menuNotes",
    ()=>menuNotes,
    "menuPrice",
    ()=>menuPrice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/beverage-menu.json.[json].cjs [app-ssr] (ecmascript)");
;
const beverageCategories = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].categories;
const beverageAddOns = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].addOns;
const menuNotes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].notes;
const featuredCategories = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].categories[0],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].categories[6],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].categories[5]
];
function menuPrice(price) {
    return `₹${price}`;
}
}),
"[project]/src/lib/cn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Tiny className joiner (no dependency needed). */ __turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
}),
"[project]/src/lib/content.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "audiences",
    ()=>audiences,
    "benefits",
    ()=>benefits,
    "faqs",
    ()=>faqs,
    "footerLinks",
    ()=>footerLinks,
    "navLinks",
    ()=>navLinks,
    "peoplePhotos",
    ()=>peoplePhotos,
    "ribbonWords",
    ()=>ribbonWords,
    "tickerWords",
    ()=>tickerWords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assets.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/beverage-menu.ts [app-ssr] (ecmascript)");
;
;
const navLinks = [
    {
        label: "Home",
        href: "/",
        icon: "home"
    },
    {
        label: "About",
        href: "/about-us",
        icon: "about"
    },
    {
        label: "Menu",
        href: "/menu",
        icon: "menu"
    },
    {
        label: "Brewlog",
        href: "/blog",
        icon: "blog"
    },
    {
        label: "Buzz us",
        href: "/contact-us",
        icon: "contact"
    }
];
const footerLinks = [
    {
        label: "About us",
        href: "/about-us"
    },
    {
        label: "Menu",
        href: "/menu"
    },
    {
        label: "Brewlog",
        href: "/blog"
    },
    {
        label: "Buzz us",
        href: "/contact-us"
    },
    {
        label: "Franchise Enquiry",
        href: "/franchise-inquiry"
    },
    {
        label: "Jobs",
        href: "/jobs"
    },
    {
        label: "Feedback",
        href: "/feedback"
    },
    {
        label: "Brand Collaborations",
        href: "/brand-collaborations"
    },
    {
        label: "Stalls and Catering",
        href: "/stalls-and-catering"
    }
];
const tickerWords = [
    {
        word: "Grab & Go",
        icon: "chat"
    },
    {
        word: "Take a Sip",
        icon: "teacup"
    },
    {
        word: "On the Move",
        icon: "teacup"
    },
    {
        word: "Signature Beverages",
        icon: "mug"
    },
    {
        word: "Freshly Brewed",
        icon: "teacup"
    }
];
const ribbonWords = [
    "Grab & Go",
    "Made for Your Mood",
    "Signature Beverages",
    "Signature Beverages",
    "Freshly Brewed"
];
const audiences = [
    {
        title: " 9-to-5 Fuelers",
        blurb: "For the desk-job heroes who need a delicious reset.",
        cta: "Fuel up",
        href: "/menu#menu-hot-coffee",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].audience1,
        otter: "mug",
        imageAlt: "A minimal doodle of the Nookaa otter carrying an office bag and a steaming coffee mug."
    },
    {
        title: "On-the-go Creatives",
        blurb: "For the creatives grabbing a fresh sip between ideas.",
        cta: "Fuel Up",
        href: "/menu#menu-iced-coffee",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].audience2,
        otter: "laptop",
        imageAlt: "A minimal doodle of the Nookaa otter sitting with a laptop and an iced coffee."
    },
    {
        title: "Between-class Sippers",
        blurb: "For students picking up a favourite sip between classes.",
        cta: "Fuel Up",
        href: "/menu#menu-matcha",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["images"].audience3,
        otter: "student",
        imageAlt: "A minimal doodle of the Nookaa otter with a backpack, notebook and iced coffee."
    }
];
const benefits = [
    {
        title: "Served in Apt Temperature",
        body: "Brewed with precision so every sip reaches you at just the right warmth or chill.",
        otter: "waiter",
        alt: "Nookaa’s otter serving hot coffee and an iced drink on a tray."
    },
    {
        title: "Fast but  never Rushed",
        body: "Served to you promptly without compromising on the thoughtful touches that make it special.",
        otter: "scooter",
        alt: "Nookaa’s otter riding a kick scooter with a takeaway drink."
    },
    {
        title: "Served with a big Smile",
        body: "Delivered with warmth and friendliness that turns every visit into welcoming and good experience.",
        otter: "smile",
        alt: "Nookaa’s otter waving with a happy smile and a coffee mug."
    }
];
const peoplePhotos = [
    {
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doodles"].mug,
        alt: "Nookaa otter choosing a favourite beverage"
    },
    {
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doodles"].barista,
        alt: "Nookaa barista otter preparing a beverage for pickup"
    },
    {
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doodles"].scooter,
        alt: "Nookaa otter taking a beverage to go"
    }
];
const prices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["beverageCategories"].flatMap((category)=>category.items.map((item)=>item.price));
const faqs = [
    {
        q: "What is Nookaa?",
        a: "Nookaa is a grab-and-go brand serving beverages only, with counter pickup and small, temporary seating for a brief stop."
    },
    {
        q: "How much do Nookaa beverages cost?",
        a: `Beverages range from ₹${Math.min(...prices)} to ₹${Math.max(...prices)}. Prices are in INR and taxes are extra. Add-ons are priced separately; see our full menu for every item and price.`
    },
    {
        q: "What cup sizes do you serve?",
        a: `Our hot beverages are served in ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuNotes"].hotCupMl} ml cups and cold beverages in ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuNotes"].coldCupMl} ml cups.`
    },
    {
        q: "How does Nookaa work?",
        a: "Nookaa is a grab-and-go beverage brand. Walk up to our counter, choose your beverage, collect it and take it along. No reservation is needed."
    },
    {
        q: "Do you serve food or snacks?",
        a: "We serve beverages only. Explore coffees, matcha, teas, coolers and more on our menu."
    },
    {
        q: "Is seating available?",
        a: "Any seating at Nookaa is small and temporary, for a brief stop. Our outlets are designed for beverage pickup, rather than extended stays, working or studying."
    },
    {
        q: "Do you offer plant-based milk?",
        a: "Oat milk and almond milk are available as paid add-ons. See the menu for prices."
    },
    {
        q: "Can I take my beverage to go?",
        a: "Yes! That’s what Nookaa is made for. Pick up your beverage at the counter and take it wherever your day goes."
    },
    {
        q: "What can I find in the Nookaa app?",
        a: "Discover rewards, discounts and beverage subscriptions in the Nookaa app."
    }
];
}),
"[project]/src/lib/enquiries.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enquiries",
    ()=>enquiries,
    "enquiryEmail",
    ()=>enquiryEmail,
    "enquiryLinks",
    ()=>enquiryLinks,
    "getEnquiry",
    ()=>getEnquiry
]);
const enquiryEmail = "hello@nookaa.in";
const personal = [
    {
        name: "name",
        label: "Full name",
        required: true,
        autoComplete: "name"
    },
    {
        name: "email",
        label: "Email address",
        type: "email",
        required: true,
        autoComplete: "email"
    },
    {
        name: "phone",
        label: "Phone number",
        type: "tel",
        required: true,
        autoComplete: "tel"
    }
];
const yesNo = [
    "Yes",
    "No"
];
const enquiries = [
    {
        slug: "jobs",
        label: "Jobs",
        title: "Make happy sips happen.",
        description: "Explore working with Nookaa. Share your experience, availability and interest in our grab-and-go beverage team.",
        intro: "Good drinks start with good people. Tell us a little about yourself and the role you’re interested in.",
        otter: "barista",
        steps: [
            {
                title: "Jobs",
                fields: [
                    ...personal,
                    {
                        name: "city",
                        label: "Location (city)",
                        required: true,
                        autoComplete: "address-level2"
                    },
                    {
                        name: "position",
                        label: "Position applying for",
                        required: true
                    },
                    {
                        name: "experience",
                        label: "Experience level",
                        type: "select",
                        required: true,
                        options: [
                            "Fresher",
                            "1–2 years",
                            "3+ years"
                        ]
                    },
                    {
                        name: "availability",
                        label: "Availability",
                        type: "select",
                        required: true,
                        options: [
                            "Immediate",
                            "15 days",
                            "30+ days"
                        ]
                    },
                    {
                        name: "portfolio",
                        label: "Portfolio / work link",
                        type: "url"
                    },
                    {
                        name: "motivation",
                        label: "Why would you like to work with Nookaa?",
                        type: "textarea"
                    }
                ]
            }
        ]
    },
    {
        slug: "franchise-inquiry",
        label: "Franchise Enquiry",
        title: "Bring Nookaa to your neighbourhood.",
        description: "Start a Nookaa operator enquiry. Tell us about your background, motivation, involvement and financial readiness.",
        intro: "Interested in operating a Nookaa grab-and-go beverage outlet? Start a conversation with our team through this application.",
        otter: "inspector",
        steps: [
            {
                title: "Personal details",
                fields: [
                    ...personal,
                    {
                        name: "age",
                        label: "Age",
                        type: "number",
                        min: 18
                    }
                ]
            },
            {
                title: "Background & experience",
                fields: [
                    {
                        name: "occupation",
                        label: "Current occupation or business",
                        required: true
                    },
                    {
                        name: "business-experience",
                        label: "Have you run a food, retail or hospitality business?",
                        type: "radio",
                        options: yesNo,
                        required: true
                    },
                    {
                        name: "experience-details",
                        label: "Your experience and key learnings",
                        type: "textarea"
                    },
                    {
                        name: "team-experience",
                        label: "Have you managed a team?",
                        type: "radio",
                        options: yesNo,
                        required: true
                    }
                ]
            },
            {
                title: "Motivation & values",
                fields: [
                    {
                        name: "motivation",
                        label: "Why would you like to operate a Nookaa outlet?",
                        type: "textarea",
                        required: true
                    },
                    {
                        name: "guest-experience",
                        label: "What makes a great customer experience?",
                        type: "textarea",
                        required: true
                    },
                    {
                        name: "values",
                        label: "What values guide your work?",
                        type: "textarea",
                        required: true
                    },
                    {
                        name: "leadership",
                        label: "Your leadership approach",
                        type: "radio",
                        required: true,
                        options: [
                            "Hands-on leadership",
                            "Systems and delegation",
                            "Team motivation"
                        ]
                    }
                ]
            },
            {
                title: "Involvement & commitment",
                fields: [
                    {
                        name: "involvement",
                        label: "Your involvement in daily operations",
                        type: "radio",
                        required: true,
                        options: [
                            "Full-time",
                            "Part-time with a manager",
                            "Passive role"
                        ]
                    },
                    {
                        name: "commitments",
                        label: "Other current or planned business commitments",
                        type: "textarea",
                        required: true
                    },
                    {
                        name: "exclusive",
                        label: "Can you focus exclusively on the Nookaa outlet?",
                        type: "radio",
                        options: yesNo,
                        required: true
                    }
                ]
            },
            {
                title: "Financial readiness",
                fields: [
                    {
                        name: "budget",
                        label: "Your planned investment budget",
                        type: "radio",
                        required: true,
                        options: [
                            "₹10–20 lakhs",
                            "₹20–40 lakhs",
                            "₹40–60 lakhs",
                            "Above ₹60 lakhs"
                        ]
                    },
                    {
                        name: "model",
                        label: "Open to discussing profit-sharing or lease-based operating models?",
                        type: "radio",
                        required: true,
                        options: [
                            "Yes",
                            "No",
                            "Tell me more"
                        ]
                    }
                ]
            },
            {
                title: "Personal insight",
                fields: [
                    {
                        name: "standout",
                        label: "How would your Nookaa outlet stand out locally?",
                        type: "textarea",
                        required: true
                    },
                    {
                        name: "community",
                        label: "How would you connect with your community?",
                        type: "textarea",
                        required: true
                    },
                    {
                        name: "achievement",
                        label: "Something you’ve built or managed that makes you proud",
                        type: "textarea",
                        required: true
                    }
                ]
            }
        ]
    },
    {
        slug: "feedback",
        label: "Feedback",
        title: "Every sip. Every little detail.",
        description: "Share feedback about Nookaa beverages, counter service or the app. Tell us what you loved and what we can improve.",
        intro: "Loved a beverage? Have an idea that could make your next visit better? We’d love to hear it.",
        otter: "smile",
        steps: [
            {
                title: "Feedback",
                fields: [
                    ...personal,
                    {
                        name: "message",
                        label: "Your message",
                        type: "textarea",
                        required: true
                    }
                ]
            }
        ]
    },
    {
        slug: "brand-collaborations",
        label: "Brand Collaborations",
        title: "Good ideas taste better together.",
        description: "Start a brand, creator or event collaboration enquiry with Nookaa. Share your brand, channels, idea and timeline.",
        intro: "Brands, creators and fresh ideas—let’s explore a collaboration that brings a little more happiness to everyday life.",
        otter: "laptop",
        steps: [
            {
                title: "Brand collaborations",
                fields: [
                    ...personal,
                    {
                        name: "brand",
                        label: "Brand / company name",
                        required: true
                    },
                    {
                        name: "collaboration-type",
                        label: "Type of collaboration",
                        type: "select",
                        required: true,
                        options: [
                            "Influencer",
                            "Brand",
                            "Event",
                            "Other"
                        ]
                    },
                    {
                        name: "website",
                        label: "Social media / website link",
                        type: "url",
                        required: true
                    },
                    {
                        name: "idea",
                        label: "Your collaboration idea",
                        type: "textarea"
                    },
                    {
                        name: "timeline",
                        label: "When are you planning this?",
                        required: true
                    }
                ]
            }
        ]
    },
    {
        slug: "stalls-and-catering",
        label: "Stalls and Catering",
        title: "Happy sips for your next event.",
        description: "Enquire about a Nookaa beverage stall or beverage catering for corporate events, weddings, parties and college festivals.",
        intro: "Planning a gathering? Tell us about your event and the beverages you have in mind. All stall and catering enquiries are for beverages only.",
        otter: "waiter",
        steps: [
            {
                title: "Stalls and catering",
                fields: [
                    ...personal,
                    {
                        name: "event-type",
                        label: "Event type",
                        type: "select",
                        required: true,
                        options: [
                            "Corporate",
                            "Wedding",
                            "Private party",
                            "College fest",
                            "Other"
                        ]
                    },
                    {
                        name: "service",
                        label: "Service requested",
                        type: "select",
                        required: true,
                        options: [
                            "Beverage stall",
                            "Beverage catering",
                            "Both"
                        ]
                    },
                    {
                        name: "date",
                        label: "Event date",
                        type: "date",
                        required: true
                    },
                    {
                        name: "location",
                        label: "Event location",
                        required: true
                    },
                    {
                        name: "footfall",
                        label: "Approximate footfall",
                        type: "number",
                        min: 1,
                        required: true
                    },
                    {
                        name: "duration",
                        label: "Event duration",
                        required: true
                    },
                    {
                        name: "setting",
                        label: "Event setting",
                        type: "radio",
                        options: [
                            "Indoor",
                            "Outdoor"
                        ],
                        required: true
                    },
                    {
                        name: "requirements",
                        label: "Custom beverage requirements",
                        type: "textarea"
                    },
                    {
                        name: "budget",
                        label: "Budget range",
                        required: true
                    }
                ]
            }
        ]
    }
];
const enquiryLinks = enquiries.map(({ slug, label })=>({
        href: `/${slug}`,
        label
    }));
function getEnquiry(slug) {
    return enquiries.find((enquiry)=>enquiry.slug === slug);
}
}),
]})(),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/lib/beverage-menu.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "categories": [
        {
            "id": "hot-coffee",
            "name": "Hot Coffee",
            "items": [
                {
                    "name": "Espresso",
                    "price": 71
                },
                {
                    "name": "Doppio",
                    "price": 89
                },
                {
                    "name": "Americano",
                    "price": 99
                },
                {
                    "name": "Cappuccino",
                    "price": 119
                },
                {
                    "name": "Flat White",
                    "price": 119
                },
                {
                    "name": "Latte",
                    "price": 119
                },
                {
                    "name": "Vanilla Latte",
                    "price": 139
                },
                {
                    "name": "Hazelnut Latte",
                    "price": 139
                },
                {
                    "name": "Signature Hot Chocolate",
                    "price": 139
                },
                {
                    "name": "Mocha",
                    "price": 149
                }
            ]
        },
        {
            "id": "cold-brew",
            "name": "Cold Brew",
            "items": [
                {
                    "name": "Classic Cold Brew",
                    "price": 139
                },
                {
                    "name": "Orange Cold Brew",
                    "price": 169
                },
                {
                    "name": "Cranberry Cold Brew",
                    "price": 169
                },
                {
                    "name": "Sweet Cream Cold Brew",
                    "price": 169
                },
                {
                    "name": "Tonic Water Cold Brew",
                    "price": 169
                },
                {
                    "name": "Ginger Ale Cold Brew",
                    "price": 169
                },
                {
                    "name": "Brown Sugar Cinnamon",
                    "price": 169
                }
            ]
        },
        {
            "id": "iced-coffee",
            "name": "Iced Coffee",
            "items": [
                {
                    "name": "Iced Americano",
                    "price": 119
                },
                {
                    "name": "Iced Shaken Espresso",
                    "price": 149
                },
                {
                    "name": "Iced Latte",
                    "price": 149
                },
                {
                    "name": "Iced Hazelnut Latte",
                    "price": 169
                },
                {
                    "name": "Iced Caramel Latte",
                    "price": 169
                },
                {
                    "name": "Iced Vanilla Latte",
                    "price": 169
                },
                {
                    "name": "Iced Mocha",
                    "price": 179
                },
                {
                    "name": "Vietnamese Coffee",
                    "price": 179
                }
            ]
        },
        {
            "id": "iced-tea",
            "name": "Iced Tea",
            "items": [
                {
                    "name": "Lemon Iced Tea",
                    "price": 99
                },
                {
                    "name": "Peach Lemon Iced Tea",
                    "price": 99
                },
                {
                    "name": "Grapefruit Lemon Iced Tea",
                    "price": 99
                },
                {
                    "name": "Hibiscus Iced Tea",
                    "price": 99
                }
            ]
        },
        {
            "id": "milk-tea",
            "name": "Milk Tea",
            "items": [
                {
                    "name": "Thai Milk Tea",
                    "price": 149
                },
                {
                    "name": "Hong Kong Milk Tea",
                    "price": 149
                },
                {
                    "name": "Honey Milk Tea",
                    "price": 149
                },
                {
                    "name": "Brown Sugar Milk Tea",
                    "price": 149
                }
            ]
        },
        {
            "id": "coolers",
            "name": "Coolers",
            "items": [
                {
                    "name": "Jamun Kala Khatta",
                    "price": 99
                },
                {
                    "name": "Pink Grapefruit",
                    "price": 99
                },
                {
                    "name": "Lychee Lemon",
                    "price": 99
                },
                {
                    "name": "Mango Passion",
                    "price": 99
                },
                {
                    "name": "Summer Berries",
                    "price": 99
                },
                {
                    "name": "Cranberry Cooler",
                    "price": 99
                }
            ]
        },
        {
            "id": "matcha",
            "name": "Matcha",
            "items": [
                {
                    "name": "Hot Matcha Latte",
                    "price": 149
                },
                {
                    "name": "Iced Matcha (No Sugar)",
                    "price": 149
                },
                {
                    "name": "Iced Vanilla Matcha",
                    "price": 189
                },
                {
                    "name": "Summer Berries Matcha",
                    "price": 189
                },
                {
                    "name": "Iced Strawberry Matcha",
                    "price": 189
                }
            ]
        },
        {
            "id": "ube",
            "name": "Ube",
            "items": [
                {
                    "name": "Ube Cold Brew",
                    "price": 169
                },
                {
                    "name": "Iced Ube Latte",
                    "price": 189
                },
                {
                    "name": "Ube Matcha Latte",
                    "price": 189
                }
            ]
        },
        {
            "id": "cloud-series",
            "name": "Cloud Series",
            "items": [
                {
                    "name": "Coconut Water Coffee Cloud",
                    "price": 179
                },
                {
                    "name": "Coconut Water Matcha Cloud",
                    "price": 179
                },
                {
                    "name": "Coconut Water Ube Cloud",
                    "price": 179
                }
            ]
        },
        {
            "id": "blended",
            "name": "Blended",
            "items": [
                {
                    "name": "Classic Cold Coffee",
                    "price": 129
                },
                {
                    "name": "Brown Butter Cold Coffee",
                    "price": 179
                },
                {
                    "name": "Strawberry Frappe",
                    "price": 179
                },
                {
                    "name": "Caramel Frappe",
                    "price": 179
                },
                {
                    "name": "Choco Chips Frappe",
                    "price": 199
                },
                {
                    "name": "Mocha Frappe",
                    "price": 199
                },
                {
                    "name": "Matcha Frappe",
                    "price": 199
                }
            ]
        }
    ],
    "addOns": [
        {
            "name": "Honey",
            "price": 10
        },
        {
            "name": "Oat Milk",
            "price": 30
        },
        {
            "name": "Almond Milk",
            "price": 30
        },
        {
            "name": "Choco Chips",
            "price": 30
        },
        {
            "name": "Cold Foam",
            "price": 30
        },
        {
            "name": "Cheese Foam",
            "price": 50
        },
        {
            "name": "Espresso Shot",
            "price": 40
        },
        {
            "name": "Sauce (Chocolate/Caramel)",
            "price": 40
        },
        {
            "name": "Flavour",
            "price": 40,
            "options": "Vanilla / Hazelnut / Chocolate / Caramel / Cinnamon / Strawberry Crush"
        }
    ],
    "notes": {
        "hotCupMl": 250,
        "coldCupMl": 475,
        "currency": "INR",
        "taxesExtra": true,
        "vegetarian": true
    }
};
}),
"[project]/src/lib/doodles.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "barista": {
        "src": "/brand/doodles/barista.png",
        "width": 1254,
        "height": 1254,
        "fit": "contain"
    },
    "mug": {
        "src": "/brand/doodles/mug.png",
        "width": 1254,
        "height": 1254,
        "fit": "contain"
    },
    "laptop": {
        "src": "/brand/doodles/laptop.png",
        "width": 1254,
        "height": 1254,
        "fit": "contain"
    },
    "student": {
        "src": "/brand/doodles/student.png",
        "width": 1254,
        "height": 1254,
        "fit": "contain"
    },
    "waiter": {
        "src": "/brand/doodles/waiter.png",
        "width": 1254,
        "height": 1254,
        "fit": "contain"
    },
    "scooter": {
        "src": "/brand/doodles/scooter.png",
        "width": 1254,
        "height": 1254,
        "fit": "contain"
    },
    "smile": {
        "src": "/brand/doodles/smile.png",
        "width": 1254,
        "height": 1254,
        "fit": "contain"
    },
    "reader": {
        "src": "/brand/doodles/reader.png",
        "width": 1254,
        "height": 1254,
        "fit": "contain"
    },
    "baker": {
        "src": "/brand/doodles/baker.png",
        "width": 1254,
        "height": 1254,
        "fit": "contain"
    },
    "inspector": {
        "src": "/brand/doodles/inspector.png",
        "width": 1254,
        "height": 1254,
        "fit": "contain"
    },
    "skater": {
        "src": "/brand/doodles/skater.png",
        "width": 1254,
        "height": 1254,
        "fit": "contain"
    },
    "empty": {
        "src": "/brand/doodles/empty.png",
        "width": 1254,
        "height": 1254,
        "fit": "contain"
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1haly30g_o_f1._.js.map