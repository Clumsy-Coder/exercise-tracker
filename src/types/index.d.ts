/**
 * Navbar link item.
 *
 * Used in Navbar
 */
export type NavbarLink = {
  /**
   * Link to display
   */
  title: string;
  /**
   * URL of the link
   */
  href: string;
};

// ---------------------------------------------------------------------------------------------- //

/**
 * Site configuration
 *
 * obtained from
 * - https://github.com/shadcn-ui/taxonomy/blob/651f984e52edd65d40ccd55e299c1baeea3ff017/types/index.d.ts#L30-L39
 */
export type SiteConfig = {
  /**
   * Name of the site
   */
  name: string;
  /**
   * Site description.
   * for SEO
   */
  description: string;
  // url: string;
  // ogImage: string;
  // links: {
  //   twitter: string;
  //   github: string;
  // };
};
