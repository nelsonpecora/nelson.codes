export type ProjectType = {
  title: string;
  desc: string;
  img: string;
  link: string;
};

type ProjectProps = {
  project: ProjectType;
};

export default function Project({ project }: ProjectProps) {
  return <div>project</div>;
}
