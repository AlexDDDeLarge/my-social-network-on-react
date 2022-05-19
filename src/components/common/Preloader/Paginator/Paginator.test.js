import React from 'react'
import { create } from 'react-test-renderer'
import Paginator from './Paginator.jsx'

describe('Paginator component  test', () => {
  test('pages count is 11 but should be showed only 10', () => {
    const component = create(<Paginator totalCount={11} count={10} portionSize={11}/>)
    const root = component.root
    let span = root.findAllByType('span')
    expect(span.length).toBe(10)
  })

  test('if pages count is more then 10 button Next should be present', () => {
    const component = create(<Paginator totalCount={11} count={10} portionSize={11}/>)
    const root = component.root
    const button = root.findAllByType('button')
    expect(button).toBeDefined()
  })
})