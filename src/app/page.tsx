'use client';

import { InsertionSort } from "@/components/InsertionSort";
import { HeapSort } from "@/components/HeapSort";

export default function Home() {
  return (
    <main>
      <h1 className={`m-auto mt-auto w-[20%]`}>Visualizar o console</h1>
      <InsertionSort/>
    </main>
  );
};
