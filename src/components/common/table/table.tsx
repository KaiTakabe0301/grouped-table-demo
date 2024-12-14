import { PropsWithChildren } from "react";

export function TableHeader({ children }: PropsWithChildren) {
  return <thead>{children}</thead>;
}

export function TableHead({ children }: PropsWithChildren) {
  return <th>{children}</th>;
}

export function TableBody({ children }: PropsWithChildren) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }: PropsWithChildren) {
  return <tr>{children}</tr>;
}

export function TableCell({ children }: PropsWithChildren) {
  return <td>{children}</td>;
}

export function Table({ children }: PropsWithChildren) {
  return <table>{children}</table>;
}
