import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  as?: string
}

export const Container = ({ children, className }: Props): React.ReactNode => {
  return (
    <div className={`container pt-13 pt-md-15 pb-7 ${className}`}>{children}</div>
  )
}
