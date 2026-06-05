import React from 'react'
import clsx from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline'
}

function Card({
  variant = 'outline',
  className,
  children,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-lg overflow-hidden'

  const variantStyles = {
    default: 'bg-white border border-neutral-200',
    elevated: 'bg-white shadow-lg',
    outline: 'bg-white border border-neutral-200',
  }

  return (
    <div className={clsx(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </div>
  )
}

export { Card }
export default Card
