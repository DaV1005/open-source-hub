"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Homepage;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var badge_1 = require("@/components/ui/badge");
var card_1 = require("@/components/ui/card");
var tabs_1 = require("@/components/ui/tabs");
var lucide_react_1 = require("lucide-react");
// API fetch function
function fetchProjects() {
    return __awaiter(this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://open-source-hub.onrender.com/api/projects')];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function Homepage() {
    var _a = (0, react_1.useState)([]), projects = _a[0], setProjects = _a[1];
    var _b = (0, react_1.useState)([]), filteredProjects = _b[0], setFilteredProjects = _b[1];
    var _c = (0, react_1.useState)("all"), selectedTab = _c[0], setSelectedTab = _c[1];
    (0, react_1.useEffect)(function () {
        fetchProjects().then(function (data) {
            setProjects(data);
            setFilteredProjects(data);
        });
    }, []);
    (0, react_1.useEffect)(function () {
        if (selectedTab === "all") {
            setFilteredProjects(projects);
        }
        else {
            setFilteredProjects(projects.filter(function (project) { return project.language && project.language.toLowerCase() === selectedTab; }));
        }
    }, [selectedTab, projects]);
    var handleTabChange = function (value) {
        setSelectedTab(value);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col min-h-screen", children: [(0, jsx_runtime_1.jsx)("header", { className: "border-b", children: (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto px-4 py-4 flex items-center justify-between", children: (0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold", children: "Open Source Hub" }) }) }), (0, jsx_runtime_1.jsxs)("main", { className: "flex-grow", children: [(0, jsx_runtime_1.jsx)("section", { className: "bg-gray-50 py-12", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-4xl font-bold text-center mb-6", children: "Discover Open Source Projects" }), (0, jsx_runtime_1.jsx)("div", { className: "max-w-2xl mx-auto relative" })] }) }), (0, jsx_runtime_1.jsx)("section", { className: "py-12", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-4", children: [(0, jsx_runtime_1.jsx)(tabs_1.Tabs, { defaultValue: "all", className: "mb-8", onValueChange: handleTabChange, children: (0, jsx_runtime_1.jsxs)(tabs_1.TabsList, { children: [(0, jsx_runtime_1.jsx)(tabs_1.TabsTrigger, { value: "all", children: "All" }), (0, jsx_runtime_1.jsx)(tabs_1.TabsTrigger, { value: "javascript", children: "JavaScript" }), (0, jsx_runtime_1.jsx)(tabs_1.TabsTrigger, { value: "typescript", children: "TypeScript" }), (0, jsx_runtime_1.jsx)(tabs_1.TabsTrigger, { value: "python", children: "Python" }), (0, jsx_runtime_1.jsx)(tabs_1.TabsTrigger, { value: "java", children: "Java" }), (0, jsx_runtime_1.jsx)(tabs_1.TabsTrigger, { value: "c++", children: "C++" }), (0, jsx_runtime_1.jsx)(tabs_1.TabsTrigger, { value: "c", children: "C" }), (0, jsx_runtime_1.jsx)(tabs_1.TabsTrigger, { value: "go", children: "Go" }), (0, jsx_runtime_1.jsx)(tabs_1.TabsTrigger, { value: "dart", children: "Dart" })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap -mx-4", children: filteredProjects.map(function (project, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "w-full sm:w-1/2 lg:w-1/3 px-4 mb-8", children: (0, jsx_runtime_1.jsxs)(card_1.Card, { className: "h-full", children: [(0, jsx_runtime_1.jsx)(card_1.CardHeader, { children: (0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: project.name }) }), (0, jsx_runtime_1.jsxs)(card_1.CardContent, { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 mb-4", children: project.description }), (0, jsx_runtime_1.jsx)("div", { className: "flex space-x-2 mb-4", children: project.language && (0, jsx_runtime_1.jsx)(badge_1.Badge, { children: project.language }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4 text-sm text-gray-500", children: [(0, jsx_runtime_1.jsxs)("span", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Star, { className: "w-4 h-4 mr-1" }), project.stargazers_count] }), (0, jsx_runtime_1.jsxs)("span", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Bug, { className: "w-4 h-4 mr-1" }), project.open_issues_count] })] })] }), (0, jsx_runtime_1.jsx)(card_1.CardFooter, { children: (0, jsx_runtime_1.jsx)("a", { href: project.html_url, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "outline", className: "w-full", rel: "noopener noreferrer", children: ["Contribute", (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowRight, { className: "w-4 h-4 ml-2" })] }) }) })] }) }, index)); }) })] }) })] }), (0, jsx_runtime_1.jsx)("footer", { className: "bg-gray-100 py-8", children: (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto px-4", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap justify-between", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full md:w-1/3 mb-4 md:mb-0", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold mb-2", children: "Open Source Hub" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-600", children: "Connecting developers with impactful open source projects." })] }) }) }) })] }));
}
