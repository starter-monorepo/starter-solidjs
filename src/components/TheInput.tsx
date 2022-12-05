export default function (props) {
  return (
    <input
      id="input"
      type="text"
      onInput={(e) => props.setValue(e.currentTarget.value)}
      value={props.value()}
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    ></input>
  )
}
