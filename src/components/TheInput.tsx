import { ParentComponent } from 'solid-js';

const TheInput: ParentComponent<{ value: string }> = (props) => {
  const [local, others] = splitProps(props, ['value'])

  return (
    <input
      id="input"
      type="text"
      value={local.value}
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      {...others}
    ></input>
  )
}

export default TheInput
