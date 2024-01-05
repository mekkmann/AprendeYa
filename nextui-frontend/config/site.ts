export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "AprendeYa",
	description: "Learn at your own pace",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
		label: "Tutorials",
		href: "/tutorials",
		},
		{
		label: "Placeholder",
		href: "/Placeholder",
		},
		{
		label: "Placeholder",
		href: "/Placeholder",
		},
		{
		label: "Placeholder",
		href: "/Placeholder",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "",
		twitter: "",
		docs: "",
		discord: "",
    sponsor: ""
	},
};
