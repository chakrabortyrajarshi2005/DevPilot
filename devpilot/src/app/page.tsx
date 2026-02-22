import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function page() {
  return (
    <div className="flex justify-center items-center h-screen ">
    <Card className="relative mx-auto w-full max-w-sm pt-0 rounded-sm ">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://wherethedogstarrages.wordpress.com/wp-content/uploads/2014/05/emma-stone.jpg"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-100 rounded-sm"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
    </Card>*

    <h1>Hello DevPilot</h1>
    </div>
  )
}

export default page;
