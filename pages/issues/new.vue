<template>
  <div class="w-full">
    <form class="px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Title
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="title"
          type="text"
          placeholder="Title..."
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="description"
        >
          Description
        </label>
        <textarea
          class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
          id="description"
          type="text"
          placeholder="Description..."
        ></textarea>
      </div>
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
      >
        Add New Issue
      </button>
    </form>
  </div>
</template>
