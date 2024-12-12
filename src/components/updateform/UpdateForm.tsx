

export default function UpdateForm() {


 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-4">Update Form</h2>
        <form>
          <label className="block mb-2">
            Name:
            <input type="text" className="border p-2 w-full rounded" />
          </label>
          <button type="submit" className="btn btn-success mt-4">
            Submit
          </button>
        </form>


      </div>
    </div>
  );
}