DROP INDEX IF EXISTS "index_idx";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_idx" ON "activities" USING btree ("date" DESC NULLS LAST);