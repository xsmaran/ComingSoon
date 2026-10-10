module.exports = [
(()=>{"use strict";return[
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return _link.useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
const _link = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)"));
function LinkComponent(props) {
    const isLegacyBehavior = props.legacyBehavior;
    const childIsHostComponent = typeof props.children === 'string' || typeof props.children === 'number' || typeof props.children?.type === 'string';
    const childIsClientComponent = props.children?.type?.$$typeof === Symbol.for('react.client.reference');
    if (isLegacyBehavior && !childIsHostComponent && !childIsClientComponent) {
        if (props.children?.type?.$$typeof === Symbol.for('react.lazy')) {
            console.error(`Using a Lazy Component as a direct child of \`<Link legacyBehavior>\` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's \`<a>\` tag.`);
        } else {
            console.error(`Using a Server Component as a direct child of \`<Link legacyBehavior>\` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's \`<a>\` tag.`);
        }
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
        ...props
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Image"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript)");
}),
"[project]/src/app/autourone_bad5904d.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$autourone_bad5904d$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/autourone_bad5904d.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$autourone_bad5904d$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'autourOne', 'autourOne Fallback'",
        fontWeight: 400,
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$autourone_bad5904d$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$autourone_bad5904d$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/app/baloo_84d6ed3c.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$baloo_84d6ed3c$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/baloo_84d6ed3c.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$baloo_84d6ed3c$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'baloo', 'baloo Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$baloo_84d6ed3c$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$baloo_84d6ed3c$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/app/chirongoround_148b31cc.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$chirongoround_148b31cc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/chirongoround_148b31cc.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$chirongoround_148b31cc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'chironGoRound', 'chironGoRound Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$chirongoround_148b31cc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$chirongoround_148b31cc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$structured$2d$data$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/structured-data.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$baloo_84d6ed3c$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/baloo_84d6ed3c.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$autourone_bad5904d$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/autourone_bad5904d.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$chirongoround_148b31cc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/chirongoround_148b31cc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-progress.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$preloader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/preloader.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/navbar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$diamond$2d$strip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/diamond-strip.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const description = "Nookaa is a grab-and-go beverage brand. Explore coffees, matcha, teas and coolers, pick up your favourite at the counter and take it along.";
const metadata = {
    metadataBase: new URL("https://nookaa.in"),
    title: {
        default: "Nookaa - Grab & Go Beverages",
        template: "%s - nookaa"
    },
    description,
    applicationName: "Nookaa",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
        }
    },
    icons: {
        icon: "/brand/official-otter.png",
        apple: "/brand/official-otter.png"
    },
    openGraph: {
        type: "website",
        title: "Nookaa - Grab & Go Beverages",
        description,
        images: [
            "/opengraph-image"
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Nookaa - Grab & Go Beverages",
        description,
        images: [
            "/opengraph-image"
        ]
    }
};
const viewport = {
    width: "device-width"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        "data-scroll-behavior": "smooth",
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$autourone_bad5904d$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$chirongoround_148b31cc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$baloo_84d6ed3c$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$structured$2d$data$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StructuredData"], {
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brandSchema"]
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex min-h-screen w-full flex-col items-center justify-start overflow-clip",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                children: ".nookaa-preloader { display: none !important; } .nookaa-reveal { opacity: 1 !important; transform: none !important; filter: none !important; }"
                            }, void 0, false, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$preloader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Preloader"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScrollProgress"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        children,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$diamond$2d$strip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DiamondStrip"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$brand$2d$logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/brand-logo.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "nookaa-footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nookaa-footer__main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "nookaa-footer__eyebrow",
                                children: "YOUR NEXT HAPPY MOMENT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/footer.tsx",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Great sips.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/sections/footer.tsx",
                                        lineNumber: 12,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Ready to go."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/footer.tsx",
                                        lineNumber: 12,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/footer.tsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/menu",
                                className: "nookaa-footer__cta",
                                children: [
                                    "Find your favourite beverage ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/footer.tsx",
                                        lineNumber: 13,
                                        columnNumber: 90
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/footer.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/footer.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nookaa-footer__brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                "aria-label": "Nookaa home",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$brand$2d$logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrandLogo"], {
                                    className: "nookaa-logo--footer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/footer.tsx",
                                    lineNumber: 16,
                                    columnNumber: 51
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/footer.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Beverages only. A little joy to go."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/footer.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Footer",
                                className: "nookaa-footer__links",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["footerLinks"].map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: href,
                                        children: label
                                    }, href, false, {
                                        fileName: "[project]/src/components/sections/footer.tsx",
                                        lineNumber: 19,
                                        columnNumber: 51
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/footer.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/footer.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: "/brand/official-otter.png",
                        alt: "",
                        width: 457,
                        height: 457,
                        sizes: "(max-width: 809px) 180px, 240px",
                        className: "nookaa-footer__otter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/footer.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/footer.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nookaa-footer__bottom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Nookaa. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/footer.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Legal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/privacy-policy",
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/footer.tsx",
                                lineNumber: 26,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/terms",
                                children: "Terms & Conditions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/footer.tsx",
                                lineNumber: 26,
                                columnNumber: 83
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://nookaa.in/delete-account",
                                children: "Delete Account"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/footer.tsx",
                                lineNumber: 26,
                                columnNumber: 132
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/footer.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Sip. Chill. Repeat."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/footer.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/footer.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/navbar.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Navbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Navbar() from the server but Navbar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/sections/navbar.tsx", "Navbar");
}),
"[project]/src/components/sections/navbar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/sections/navbar.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/sections/preloader.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Preloader",
    ()=>Preloader
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Preloader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Preloader() from the server but Preloader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/sections/preloader.tsx", "Preloader");
}),
"[project]/src/components/sections/preloader.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$preloader$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/sections/preloader.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$preloader$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ui/brand-logo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandLogo",
    ()=>BrandLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-rsc] (ecmascript)");
;
;
function BrandLogo({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("nookaa-logo", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "nookaa-logo__name",
                children: "NOOKAA"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/brand-logo.tsx",
                lineNumber: 6,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
"[project]/src/components/ui/diamond-strip.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** CSS diamond trim keeps the original theme without a raster image request. */ __turbopack_context__.s([
    "DiamondStrip",
    ()=>DiamondStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function DiamondStrip() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        className: "nookaa-diamond-strip h-5 w-full shrink-0 md:h-[30px]"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/diamond-strip.tsx",
        lineNumber: 3,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ui/scroll-progress.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollProgress",
    ()=>ScrollProgress
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ScrollProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScrollProgress() from the server but ScrollProgress is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/scroll-progress.tsx", "ScrollProgress");
}),
"[project]/src/components/ui/scroll-progress.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-progress.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ui/structured-data.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Only publish schema that reflects the content visitors can read on the page. */ __turbopack_context__.s([
    "StructuredData",
    ()=>StructuredData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function StructuredData({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(data).replace(/</g, "\\u003c")
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/structured-data.tsx",
        lineNumber: 3,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/lib/assets.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$doodles$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/doodles.json.[json].cjs [app-rsc] (ecmascript)");
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
const doodles = Object.fromEntries(Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$doodles$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).map(([key, image])=>[
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
"[project]/src/lib/beverage-menu.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/beverage-menu.json.[json].cjs [app-rsc] (ecmascript)");
;
const beverageCategories = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].categories;
const beverageAddOns = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].addOns;
const menuNotes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].notes;
const featuredCategories = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].categories[0],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].categories[6],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].categories[5]
];
function menuPrice(price) {
    return `₹${price}`;
}
}),
"[project]/src/lib/cn.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Tiny className joiner (no dependency needed). */ __turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
}),
"[project]/src/lib/content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assets.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/beverage-menu.ts [app-rsc] (ecmascript)");
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
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].audience1,
        otter: "mug",
        imageAlt: "A minimal doodle of the Nookaa otter carrying an office bag and a steaming coffee mug."
    },
    {
        title: "On-the-go Creatives",
        blurb: "For the creatives grabbing a fresh sip between ideas.",
        cta: "Fuel Up",
        href: "/menu#menu-iced-coffee",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].audience2,
        otter: "laptop",
        imageAlt: "A minimal doodle of the Nookaa otter sitting with a laptop and an iced coffee."
    },
    {
        title: "Between-class Sippers",
        blurb: "For students picking up a favourite sip between classes.",
        cta: "Fuel Up",
        href: "/menu#menu-matcha",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].audience3,
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
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doodles"].mug,
        alt: "Nookaa otter choosing a favourite beverage"
    },
    {
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doodles"].barista,
        alt: "Nookaa barista otter preparing a beverage for pickup"
    },
    {
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doodles"].scooter,
        alt: "Nookaa otter taking a beverage to go"
    }
];
const prices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["beverageCategories"].flatMap((category)=>category.items.map((item)=>item.price));
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
        a: `Our hot beverages are served in ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["menuNotes"].hotCupMl} ml cups and cold beverages in ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["menuNotes"].coldCupMl} ml cups.`
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
"[project]/src/lib/pages.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aboutStory",
    ()=>aboutStory,
    "aboutTicker",
    ()=>aboutTicker,
    "aboutValues",
    ()=>aboutValues,
    "contactInfo",
    ()=>contactInfo,
    "contactReasons",
    ()=>contactReasons,
    "founder",
    ()=>founder
]);
const aboutStory = {
    title: "Great drinks should be an everyday ritual.",
    paragraphs: [
        "Somewhere along the way, grabbing a great drink became a luxury. We believe the little pauses between a hectic lecture, a busy workday or a long drive deserve something special—without making you think twice about the price.",
        "That’s why we created NOOKAA: a grab-and-go beverage brand serving handcrafted coffees, milk teas, refreshers, matcha and more. Premium ingredients, fast service, generous pours and honest prices bring café-quality beverages into everyday life.",
        "From your morning coffee to an afternoon refresher, we’re here to make every sip worth it. Because life is made up of small moments, and we’re here to make them a little happier."
    ],
    signature: "NOOKAA — Sip the Happiness!"
};
const aboutValues = [
    {
        title: "Handcrafted Quality",
        body: "Premium ingredients and care in every cup, bringing café-quality beverages to your everyday routine.",
        art: "inspector"
    },
    {
        title: "Ready for Your Day",
        body: "Fast service and generous pours. Pick up your favourite beverage and carry a little happiness along.",
        art: "scooter"
    },
    {
        title: "Honestly Priced",
        body: "Great drinks should be an everyday ritual, not an occasional indulgence. Every sip should feel worth it.",
        art: "mug"
    }
];
const founder = {
    heading: "A small part of your story.",
    tagline: "Maybe one day you’ll stop by NOOKAA for a drink.",
    paragraphs: [
        "You won’t know it then, but it might become your first coffee before work, your favourite stop after college, or the sip you celebrate a small win with.",
        "Life isn’t remembered only by its big milestones. It’s remembered by the little moments that made us smile. If NOOKAA becomes a small part of one of those memories, we’ll know we’ve created something beyond a beverage brand.",
        "We want to belong in your everyday life, and we can’t wait to become a small part of your story."
    ],
    name: "Sip the Happiness.",
    role: "With warmth, the founder of NOOKAA"
};
const aboutTicker = [
    {
        word: "Matcha Latte",
        icon: "mug"
    },
    {
        word: "Classic Cold Brew",
        icon: "teacup"
    },
    {
        word: "Iced Latte",
        icon: "teacup"
    },
    {
        word: "Latte",
        icon: "mug"
    },
    {
        word: "Good Sips",
        icon: "chat"
    }
];
const contactInfo = {
    address: [
        "Shop No 1, Icon Heights, J-25",
        "Kandivali, Panchsheel Garden, Mahavir Nagar",
        "Kandivali West, Mumbai, Maharashtra 400067"
    ],
    phone: "+91-9594957794",
    email: "hello@nookaa.in",
    hours: [
        {
            days: "Mon – Fri",
            time: "7:00 am – 8:00 pm"
        },
        {
            days: "Saturday",
            time: "8:00 am – 9:00 pm"
        },
        {
            days: "Sunday",
            time: "8:00 am – 6:00 pm"
        }
    ]
};
const contactReasons = [
    "Beverage question",
    "App & rewards",
    "Feedback",
    "Business enquiry",
    "Just saying hi"
];
}),
"[project]/src/lib/seo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brandDescription",
    ()=>brandDescription,
    "brandSchema",
    ()=>brandSchema,
    "breadcrumbSchema",
    ()=>breadcrumbSchema,
    "faqSchema",
    ()=>faqSchema,
    "menuSchema",
    ()=>menuSchema,
    "organizationId",
    ()=>organizationId,
    "pageMetadata",
    ()=>pageMetadata,
    "siteUrl",
    ()=>siteUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/beverage-menu.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pages.ts [app-rsc] (ecmascript)");
;
;
;
const siteUrl = "https://nookaa.in";
const brandDescription = "Nookaa is a grab-and-go beverage brand serving coffees, matcha, teas, coolers and more. Explore the menu with prices, app rewards and beverage subscriptions.";
const organizationId = `${siteUrl}/#organization`;
function pageMetadata(title, description, path) {
    const url = `${siteUrl}${path}`;
    const socialTitle = `${title} | Nookaa`;
    return {
        title,
        description,
        alternates: {
            canonical: url
        },
        openGraph: {
            title: socialTitle,
            description,
            url,
            siteName: "Nookaa",
            locale: "en_IN",
            type: "website",
            images: [
                {
                    url: `${siteUrl}/opengraph-image`,
                    width: 1200,
                    height: 630,
                    alt: "Nookaa — grab-and-go beverages"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: socialTitle,
            description,
            images: [
                `${siteUrl}/opengraph-image`
            ]
        }
    };
}
const brandSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": organizationId,
            name: "Nookaa",
            url: siteUrl,
            description: brandDescription,
            telephone: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contactInfo"].phone.replace(/[^+\d]/g, ""),
            email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pages$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contactInfo"].email,
            address: {
                "@type": "PostalAddress",
                streetAddress: "Shop No 1, Icon Heights, J-25, Kandivali, Panchsheel Garden, Mahavir Nagar, Kandivali West",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400067",
                addressCountry: "IN"
            },
            logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/brand/official-otter.png`
            }
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: "Nookaa",
            url: siteUrl,
            publisher: {
                "@id": organizationId
            },
            inLanguage: "en-IN"
        }
    ]
};
function breadcrumbSchema(items) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index)=>({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: `${siteUrl}${item.path}`
            }))
    };
}
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faqs"].map(({ q, a })=>({
            "@type": "Question",
            name: q,
            acceptedAnswer: {
                "@type": "Answer",
                text: a
            }
        }))
};
const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${siteUrl}/menu#beverage-menu`,
    name: "Nookaa Beverage Menu",
    url: `${siteUrl}/menu`,
    inLanguage: "en-IN",
    description: `Beverages only. Hot cups ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["menuNotes"].hotCupMl} ml; cold cups ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["menuNotes"].coldCupMl} ml. Prices in INR; taxes extra.`,
    hasMenuSection: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beverage$2d$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["beverageCategories"].map((category)=>({
            "@type": "MenuSection",
            name: category.name,
            hasMenuItem: category.items.map((item)=>({
                    "@type": "MenuItem",
                    name: item.name,
                    offers: {
                        "@type": "Offer",
                        price: item.price,
                        priceCurrency: "INR",
                        url: `${siteUrl}/menu#menu-${category.id}`
                    }
                }))
        }))
};
}),
]})(),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js"));
}),
"[project]/node_modules/next/dist/client/image-component.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/image-component.js"));
}),
"[project]/src/app/autourone_bad5904d.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "autourone_bad5904d-module__rEv-cW__className",
  "variable": "autourone_bad5904d-module__rEv-cW__variable",
});
}),
"[project]/src/app/baloo_84d6ed3c.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "baloo_84d6ed3c-module__z5pzFG__className",
  "variable": "baloo_84d6ed3c-module__z5pzFG__variable",
});
}),
"[project]/src/app/chirongoround_148b31cc.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "chirongoround_148b31cc-module__62AyZW__className",
  "variable": "chirongoround_148b31cc-module__62AyZW__variable",
});
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/beverage-menu.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/src/lib/doodles.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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

//# sourceMappingURL=_0d-a8bop8i_7w._.js.map