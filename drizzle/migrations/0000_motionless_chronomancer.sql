DO $$ BEGIN
 CREATE TYPE "distanceUnit" AS ENUM('km', 'mile');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "weightUnit" AS ENUM('kg', 'lbs');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activities" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"exerciseId" varchar NOT NULL,
	"reps" integer,
	"weight" double precision,
	"weightUnit" "weightUnit",
	"distance" double precision,
	"distanceUnit" "distanceUnit",
	"duration" interval minute to second,
	"date" timestamp (0) with time zone DEFAULT now() NOT NULL
);
