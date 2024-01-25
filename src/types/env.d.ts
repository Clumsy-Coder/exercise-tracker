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
  }
}
