'use client'
import UpdateForm from '@/components/updateform/UpdateForm';
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'


const UpdateModal = () => {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
dialogRef.current?.showModal()
  },[])
  return (
    <dialog 
    ref={dialogRef}
    onClose={() => router.back()}
    className='border p-4 rounded-md backdrop:bg-slate-300/50'
    >
      <button 
      className='absolute top-2 right-4 border-none'
      onClick={()=> dialogRef.current?.close()}>
        &times;

      </button>
      <h1>0101</h1>
      {/* <UpdateForm /> */}

    </dialog>
  )
}

export default UpdateModal