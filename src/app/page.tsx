import FormList from "@/components/updateform/FormList";
import Image from "next/image";
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
