export type ProjectType = {
  name: string;
};

type ProjectProps = {
  project: ProjectType;
};

export default function Project({ project }: ProjectProps) {
  return <div>project</div>;
}
