CREATE INDEX IF NOT EXISTS "userId_idx" ON "activities" ("userId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "exerciseId_idx" ON "activities" ("exerciseId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "index_idx" ON "activities" ("date");