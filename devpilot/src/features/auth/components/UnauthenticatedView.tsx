import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { ShieldAlertIcon } from "lucide-react"
import { SignInButton } from "@clerk/nextjs";

function UnauthenticatedView() {
  return (
    <div className=" flex justify-center items-center h-screen">
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="muted">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security Alert / Unauthorized Access</ItemTitle>
          <ItemDescription>
            You are not authorize to access this application.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <ItemActions>
            <SignInButton>
              <Button variant="outline" size="sm">
                Sign in
              </Button>
            </SignInButton>
          </ItemActions>
        </ItemActions>
      </Item>
    </div>
    </div>
  )
}

export default UnauthenticatedView