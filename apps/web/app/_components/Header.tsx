export function Header() {
  return (
    <div className="flex p-4 justify-between">
      <h1 className="text-3xl">Smiles Music Salon</h1>

      <table>
        <tbody className="[&_th]:text-right">
          <tr>
            <th>TEL:</th>
            <td>06-XXXX-XXXX</td>
          </tr>
          <tr>
            <th>LineID:</th>
            <td>XXXXXX</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>xxxx@xxxx.jp</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
