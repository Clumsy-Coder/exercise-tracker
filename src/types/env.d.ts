declare namespace NodeJS {
  /**
   * Environment variables loaded from file `.env.local`
   */
  export interface ProcessEnv {
    /**
     * NextJS project version
     *
     * @remarks Production build version: Major.Mainor.Patch
     * @example 1.1.0
     *
     * @remarks Development build version: Major.Minor.Patch-dev-\{dirty | clean\}
     * @example 1.0.0-development.2-dev-dirty
     *
     * @remarks will use `dirty` if the git has changed files that are not committed.
     * @remarks will use `clean` if the git has no files to commit
     */
    NEXT_PUBLIC_BUILD_VERSION: string;

    /**
     * Latest git commit ID
     *
     * @example a7d452f
     */
    NEXT_PUBLIC_BUILD_ID: string;

    /**
     * Build time in unix time
     *
     * @example 1706146984
     */
    NEXT_PUBLIC_BUILD_TIME: number;

    // ------------------------------------------------------------------------------------------ //

    /**
     * Exercise DB API key
     *
     * @see {@link https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/}
     */
    EXERCISE_DB_API: string;

    // ------------------------------------------------------------------------------------------ //

    /**
     * Google client ID
     *
     * Used in `NextAuth`o
     *
     * Check Google provider {@link https://next-auth.js.org/providers/google}
     * To create Google OAuth credentials see {@link https://youtu.be/XmmMQfpQh40?si=rDtmCFsGD3f79BC_&t=276}
     */
    GOOGLE_CLIENT_ID: string;

    /**
     * Google client secret.
     *
     * Used in `NextAuth`
     *
     * Check Google provider {@link https://next-auth.js.org/providers/google}
     * To create Google OAuth credentials see {@link https://youtu.be/XmmMQfpQh40?si=rDtmCFsGD3f79BC_&t=276}
     */
    GOOGLE_CLIENT_SECRET: string;

    /**
     * NextAuth secret
     *
     * To generate random password, use command
     * @example
     * ```
     * openssl rand -base64 32
     * ```
     */
    NEXTAUTH_SECRET: string;
  }
}
