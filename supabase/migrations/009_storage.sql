-- Create 'images' bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Policies (Drop first to ensure update)

-- Public Access
DROP POLICY IF EXISTS "Images Public Access" ON storage.objects;
CREATE POLICY "Images Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'images' );

-- Admin Upload
DROP POLICY IF EXISTS "Images Admin Upload" ON storage.objects;
CREATE POLICY "Images Admin Upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'images' AND
  auth.role() = 'authenticated' AND
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Admin Update
DROP POLICY IF EXISTS "Images Admin Update" ON storage.objects;
CREATE POLICY "Images Admin Update"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'images' AND
  auth.role() = 'authenticated' AND
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Admin Delete
DROP POLICY IF EXISTS "Images Admin Delete" ON storage.objects;
CREATE POLICY "Images Admin Delete"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'images' AND
  auth.role() = 'authenticated' AND
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  )
);
