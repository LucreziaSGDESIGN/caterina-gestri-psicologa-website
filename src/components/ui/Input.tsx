import React from 'react'
import clsx from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  helperText?: string
  label?: string
}

export default function Input({
  error = false,
  helperText,
  label,
  className,
  ...props
}: InputProps) {
  const baseStyles =
    'w-full px-4 py-3 border rounded-lg focus:outline-none transition'

  const stateStyles = error
    ? 'border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500'
    : 'border-neutral-300 focus:border-primary-600 focus:ring-1 focus:ring-primary-600'

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-neutral-900 mb-2">
          {label}
        </label>
      )}
      <input className={clsx(baseStyles, stateStyles, className)} {...props} />
      {helperText && (
        <p className={clsx('text-sm mt-1', error ? 'text-red-600' : 'text-neutral-600')}>
          {helperText}
        </p>
      )}
    </div>
  )
}
