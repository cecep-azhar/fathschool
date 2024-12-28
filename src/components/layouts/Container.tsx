import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  as?: string,
  padding?: string
}

export const Container = ({ children, className, padding ="pb-14 pt-18 pt-lg-20" }: Props): React.ReactNode => {
  return (
    <div className={`container ${padding} ${className}`}>{children}</div>
  )
}
