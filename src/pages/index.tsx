import { useNavigate } from '@solidjs/router';
import type { Component } from 'solid-js';
import TheInput from '~/components/TheInput'
const App: Component = () => {

  const [name, setName] = createSignal("")
  const navigate = useNavigate();

  const go = () => {
    if (name()) {
      navigate(`/hi/${name()}`)
    }
  }
  return (
    <div>
      <div i-carbon-campsite text-4xl inline-block />
      <p>
        <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
          Vitesse Lite
        </a>
      </p>
      <p>
        <em text-sm op75>Opinionated Vite Starter Template</em>
      </p>

      <div py-4 />

      <TheInput
        placeholder="What's your name?"
        autocomplete="false"
        value={name}
        setValue={setName}
        onKeydown={go}
      />

      <div>
        <button
          class="m-3 text-sm btn"
          disabled={!name()}
          onClick={go}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default App;
