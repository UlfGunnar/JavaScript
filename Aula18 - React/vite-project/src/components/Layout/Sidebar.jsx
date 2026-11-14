import React from "react";
import { BarChart3, LayoutDashboard, Zap } from "lucide-react"
import ulf from "../../images/ulf.jpg";

const menuItems = [
    {
        id: "dashboard",
        icon: LayoutDashboard,
        label: "Dashboard",
        active: True,
        badge: "New",
    },
    {
        id: "analytics",
        icon: BarChart3,
        label: "Analytics",
        submenu: [
            {
                id: "overview",
                label: "Overview"
            },
            {
                id: "reports",
                label: "Reports"
            },
            {
                id: "insights",
                label: "Insisghts"
            }
        ]
    },
    {
        id: "users",
        icon: Users,
        label: "Users",
        count: "2.4k",
        submenu: [
            {
                id: "all-users",
                label: "All Users"
            },
            {
                id: "roles",
                label: "Roles & Permissions"
            },
            {   
                id: "activity",
                label: "User Activity"
            }
        ]
    },
    {
        id: "ecommerce",
        icon: ShoppingBag,
        label: "E-commerce",
        submenu: [
            {
                id: "products", 
                label: "Products"
            },
            {
                id: "orders",
                label: "Orders"
            },
            {
                id: "customers",
                label: "Customers"
            }
        ]
    }
]

function App() {
  return ( <div className="transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700-50 flex flex-col relative z-10">
    {/* Logo */}
    <div className="p-6 border-p border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white"/>
            </div>

            {/* Conditional Rendering */}
            <div>
                <h1 className="text-xl font-bold text-slate-800 dark:text_white">
                    Nexus
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                    Admin Panel
                </p>
            </div>
        </div>
    </div>

        {/* Navigation  I will display Dynamic Menus*/}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto"></nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="flex intems-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <img src={ulf} alt="user" className="w-10 h-10 rounded-full ring-2 ring-blue-500"/>
                <div className="flex-1 min-1-0">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                            Ulf Gunnar
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            Administrator
                        </p>
                    </div>
                </div>
            </div>
        </div>
  </div>
  );
}

export default App;