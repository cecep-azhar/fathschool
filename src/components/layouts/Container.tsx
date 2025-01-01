import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  as?: string,
  padding?: string
}

export const Container = ({ children, className, padding ="pb-14 pb-lg-16 pt-18 pt-lg-20", style }: Props): React.ReactNode => {
  return (
    <div className={`container ${padding} ${className}`} style={style}>{children}</div>
  )
}
