// import { Badge } from "@/components/ui/badge"
// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

// function page() {
//   return (
//     <div className="flex justify-center items-center h-screen ">
//     <Card className="relative mx-auto w-full max-w-sm pt-0 rounded-sm ">
//       <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
//       <img
//         src="https://wherethedogstarrages.wordpress.com/wp-content/uploads/2014/05/emma-stone.jpg"
//         alt="Event cover"
//         className="relative z-20 aspect-video w-full object-cover brightness-100 rounded-sm"
//       />
//       <CardHeader>
//         <CardAction>
//           <Badge variant="secondary">Featured</Badge>
//         </CardAction>
//         <CardTitle>Design systems meetup</CardTitle>
//         <CardDescription>
//           A practical talk on component APIs, accessibility, and shipping
//           faster.
//         </CardDescription>
//       </CardHeader>
//     </Card>
//     </div>
//   )
// }

// export default page;

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
