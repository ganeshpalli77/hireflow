"use client"

import * as React from "react"
import {
  IconMail,
  IconCalendar,
  IconUsers,
  IconTrendingUp,
  IconChevronDown,
  IconDotsVertical,
  IconCircleCheck,
  IconClock,
  IconLoader,
  IconX,
  IconMailForward,
} from "@tabler/icons-react"
import { formatDateRelative } from "@/lib/date-utils"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type RecruitmentLead = {
  id: number
  company: string
  position: string
  status: string
  contact: string
  email: string
  response_rate: string
  last_activity: string
}

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Email Sent":
      return "secondary"
    case "Replied - Interested":
      return "default"
    case "Meeting Scheduled":
      return "default"
    case "Done":
      return "default"
    case "In Progress":
      return "secondary"
    case "In Process":
      return "secondary"
    case "Replied - Not Interested":
      return "destructive"
    default:
      return "outline"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Email Sent":
      return <IconMailForward className="w-3 h-3 text-blue-500" />
    case "Replied - Interested":
      return <IconCircleCheck className="w-3 h-3 text-green-600" />
    case "Meeting Scheduled":
      return <IconCircleCheck className="w-3 h-3 text-green-600" />
    case "Done":
      return <IconCircleCheck className="w-3 h-3 text-green-600" />
    case "In Progress":
      return <IconClock className="w-3 h-3 text-orange-500" />
    case "In Process":
      return <IconClock className="w-3 h-3 text-orange-500" />
    case "Replied - Not Interested":
      return <IconX className="w-3 h-3 text-red-500" />
    default:
      return <IconClock className="w-3 h-3 text-gray-400" />
  }
}

const columns: ColumnDef<RecruitmentLead>[] = [
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("company")}</div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="max-w-[200px] truncate">{row.getValue("position")}</div>
    ),
  },
  {
    accessorKey: "contact",
    header: "Contact",
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.getValue("contact")}</div>
        <div className="text-sm text-muted-foreground">{row.original.email}</div>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <div className="flex items-center gap-2">
          {getStatusIcon(status)}
          <span className="text-sm font-medium">{status}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "response_rate",
    header: "Response Rate",
    cell: ({ row }) => (
      <div className="text-right font-mono">{row.getValue("response_rate")}</div>
    ),
  },
  {
    accessorKey: "last_activity",
    header: "Last Activity",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground">
        {formatDateRelative(row.getValue("last_activity"))}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const lead = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <IconDotsVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Send Follow-up</DropdownMenuItem>
            <DropdownMenuItem>Schedule Meeting</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Mark as Closed</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

interface RecruitmentDataTableProps {
  data: RecruitmentLead[]
}

export function RecruitmentDataTable({ data }: RecruitmentDataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-lg font-medium">Recent Leads</h2>
          <p className="text-sm text-muted-foreground">
            Track and manage your recruitment outreach campaigns
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Export Data
          </Button>
          <Button size="sm">
            <IconMail className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Filter companies..."
            value={(table.getColumn("company")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("company")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No leads found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-6">
        <div className="text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} lead(s) found
        </div>
      </div>
    </div>
  )
}
