import { PropsWithChildren } from "react";

// TableHeader コンポーネント用の型定義（<thead> に対応）
type TableHeaderProps = PropsWithChildren<
  React.HTMLAttributes<HTMLTableSectionElement>
>;
export function TableHeader({ children, ...props }: TableHeaderProps) {
  return <thead {...props}>{children}</thead>;
}

// TableHead コンポーネント用の型定義（<th> に対応）
type TableHeadProps = PropsWithChildren<
  React.ThHTMLAttributes<HTMLTableHeaderCellElement>
>;
export function TableHead({ children, ...props }: TableHeadProps) {
  return <th {...props}>{children}</th>;
}

// TableBody コンポーネント用の型定義（<tbody> に対応）
type TableBodyProps = PropsWithChildren<
  React.HTMLAttributes<HTMLTableSectionElement>
>;
export function TableBody({ children, ...props }: TableBodyProps) {
  return <tbody {...props}>{children}</tbody>;
}

// TableRow コンポーネント用の型定義（<tr> に対応）
type TableRowProps = PropsWithChildren<
  React.HTMLAttributes<HTMLTableRowElement>
>;
export function TableRow({ children, ...props }: TableRowProps) {
  return <tr {...props}>{children}</tr>;
}

// TableCell コンポーネント用の型定義（<td> に対応）
type TableCellProps = PropsWithChildren<
  React.TdHTMLAttributes<HTMLTableDataCellElement>
>;
export function TableCell({ children, ...props }: TableCellProps) {
  return <td {...props}>{children}</td>;
}

type TableProps = PropsWithChildren<
  React.TableHTMLAttributes<HTMLTableElement>
>;
export function Table({ children, ...props }: TableProps) {
  return <table {...props}>{children}</table>;
}
