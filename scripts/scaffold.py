import os

# Define the directory structure to create
dirs = [
    # Study Abroad
    "src/app/study-abroad",
    "src/app/study-abroad/countries",
    "src/app/study-abroad/universities",
    "src/app/study-abroad/exams",
    "src/app/study-abroad/application",
    
    # Resources
    "src/app/resources",
    "src/app/resources/blog",
    "src/app/resources/guides",
    "src/app/resources/webinars",
    "src/app/resources/tools",
    
    # Community
    "src/app/community",
    "src/app/community/forums",
    "src/app/community/qna",
    "src/app/community/groups",
    "src/app/community/events",
    
    # Marketing / Public (adding to existing)
    "src/app/(public)/pricing",
    "src/app/(public)/about",
    "src/app/(public)/contact-us",
    "src/app/(public)/success-stories",
    "src/app/(public)/legal/privacy",
    "src/app/(public)/legal/terms",
    
    # Admin Expansion
    "src/app/admin/cms",
    "src/app/admin/analytics",
    "src/app/admin/settings",
]

base_path = "/Users/apple/Gitlab/careerpathai"

def create_scaffold():
    for d in dirs:
        full_path = os.path.join(base_path, d)
        if not os.path.exists(full_path):
            print(f"Creating directory: {full_path}")
            os.makedirs(full_path)
        
        # Create page.tsx if it doesn't exist
        page_path = os.path.join(full_path, "page.tsx")
        if not os.path.exists(page_path):
            print(f"Creating page: {page_path}")
            component_name = d.split("/")[-1].replace("-", " ").title().replace(" ", "")
            # Handle special cases similar to (public)
            if component_name.startswith("("):
                component_name = component_name[1:-1]
            
            content = f"""import React from 'react';

export default function {component_name}Page() {{
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{component_name}</h1>
      <p className="text-zinc-500">Feature coming soon.</p>
    </div>
  );
}}
"""
            with open(page_path, "w") as f:
                f.write(content)

if __name__ == "__main__":
    create_scaffold()
