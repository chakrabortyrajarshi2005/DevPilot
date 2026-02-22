'use client';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { Button } from '@/components/ui/button';

export default function Home() {
	const projects = useQuery(api.projects.get);
	const createProject = useMutation(api.projects.create);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Button
				onClick={() =>
					createProject({
						name: 'New Project',
					})
				}>
				Add new
			</Button>
			{projects?.map((project) => {
				return (
					<div
						className="border rounded flex flex-column p-2"
						key={project._id}>
						<p>{project.name} : </p>
						<p> {`${project.ownerId.toString()}`}</p>
					</div>
				);
			})}
		</main>
	);
}
