import FormList from "@/components/updateform/FormList";
import { FormDataProvider } from "./context/FormContext";

export default function Home() {
  return (
   <FormDataProvider>
     <div>
      <main>
       <FormList />
      </main>
    </div>
   </FormDataProvider>
  );
}
