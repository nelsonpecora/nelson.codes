import Project from './Project';

import type { ProjectType } from './Project';

type ProjectsProps = {
  data: ProjectType[];
};

export default function Projects({ data }: ProjectsProps) {
  return <div>projects: {JSON.stringify(data)}</div>;
}
