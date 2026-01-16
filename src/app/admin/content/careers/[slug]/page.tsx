import { updateCareerWeights } from "@/actions/paths";
import { RIASECWeightageTool } from "@/components/admin/RIASECWeightageTool";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditCareerPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: career } = await supabase
    .schema('careerpath')
    .from('careers')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!career) return notFound();

  const updateWeights = updateCareerWeights.bind(null, career.id);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Edit Career Logic</h1>
        <p className="text-zinc-500">Configure AI matchmaking for {career.title}</p>
      </div>

      <div className="flex justify-center">
        <RIASECWeightageTool 
            careerTitle={career.title} 
            initialScores={career.riasec_scores} 
            onSave={updateWeights} 
        />
      </div>
    </div>
  );
}
