import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text,type }) => {
  const className = `${styles.button} ${styles[`button--${type}`]}`;
  return <button className={className}> {text} Button</button>
}
