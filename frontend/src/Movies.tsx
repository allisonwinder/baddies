import data from "./MovieDataSample.json";

const mds = data.MovieDataSampleList;

function MovieList() {
  return (
    <>
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {mds.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
