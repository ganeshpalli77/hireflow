import { IconTrendingDown, IconTrendingUp, IconMail, IconUsers, IconCalendar, IconTarget } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-6 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card p-6">
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            <IconMail className="size-4" />
            Emails Sent Today
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            0
          </CardTitle>
          <CardAction>
            <Badge variant="secondary" className="text-muted-foreground">
              --
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
            No campaigns active
          </div>
          <div className="text-muted-foreground">
            Start your first recruitment campaign
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card p-6">
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            <IconTarget className="size-4" />
            Response Rate
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            0%
          </CardTitle>
          <CardAction>
            <Badge variant="secondary" className="text-muted-foreground">
              --
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
            No responses yet
          </div>
          <div className="text-muted-foreground">
            Response rate will appear after campaigns
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card p-6">
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            <IconUsers className="size-4" />
            Active Leads
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            0
          </CardTitle>
          <CardAction>
            <Badge variant="secondary" className="text-muted-foreground">
              --
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
            No active leads
          </div>
          <div className="text-muted-foreground">Import or scrape leads to get started</div>
        </CardFooter>
      </Card>
      <Card className="@container/card p-6">
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            <IconCalendar className="size-4" />
            Meetings Scheduled
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            0
          </CardTitle>
          <CardAction>
            <Badge variant="secondary" className="text-muted-foreground">
              --
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
            No meetings scheduled
          </div>
          <div className="text-muted-foreground">Meetings will appear as leads convert</div>
        </CardFooter>
      </Card>
    </div>
  )
}
