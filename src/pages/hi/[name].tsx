import {  useParams } from '@solidjs/router';

import {  JSX } from 'solid-js'

export default function Hi(): JSX.Element {

  const params = useParams()

  return (
    <div>
      <div i-carbon-pedestrian text-4xl inline-block />
      <p>
        Hi, { params.name }
      </p>
      <p text-sm op50>
        <em>Dynamic route!</em>
      </p>

      <div>
        <button
          class="btn m-3 text-sm mt-8"
          onClick={() => navigate('/')}
        >
          Back
        </button>
      </div>
    </div>
  )
}
