function App() {
  return (
    <div>
      <header>
        <h1>Cute Dog Images</h1>
      </header>
      <main>
        <section>
          <figure>
            <img
              src="https://random.dog/f886b15c-69d6-4840-bfe9-fd8442dcb516.jpg"
              alt="cute dog"
            />
          </figure>
        </section>
      </main>
      <footer>
        <p>Dog images are retrieved from RandomDog API</p>
        <p>
          <a href="https://random.dog/woof.json">Donate to RandomDog API</a>
        </p>
      </footer>
    </div>
  );
}

export default App;