-- Add RIASEC Scores column to careers table
ALTER TABLE careerpath.careers 
ADD COLUMN IF NOT EXISTS riasec_scores jsonb DEFAULT '{"R": 50, "I": 50, "A": 50, "S": 50, "E": 50, "C": 50}'::jsonb;
