export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Cookie Browser',
      description: 'Small and powerful. No news feed, No message push, No Sign-Up Required, Minimal permissions, Private and Secure.',
    },
    theme: {
      customizable: false,
      color: 'blue',
      radius: 0.5,
    },
    header: {
      title: 'Cookie Browser',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/cookie.svg',
        dark: '/cookie_white.svg',
      },
      nav: [],
      // links: [{
      //   icon: 'lucide:github',
      //   to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
      //   target: '_blank',
      // }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: false,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [
        // {
        //   icon: 'lucide:github',
        //   to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        //   target: '_blank',
        // }
        {
          title: "Terms of Use",
          to: '/terms',
          target: "_self"
        }, {
          title: "Privacy Policy",
          to: '/privacy',
          target: "_self"
        }
      ],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      // links: [{
      //   title: 'Star on GitHub',
      //   icon: 'lucide:star',
      //   to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
      //   target: '_blank',
      // }, {
      //   title: 'Create Issues',
      //   icon: 'lucide:circle-dot',
      //   to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/issues',
      //   target: '_blank',
      // }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});