<script lang="ts">
    import { enhance } from '$app/forms';
    export let form;
  </script>
  
  <form
    use:enhance
    action="?/upload"
    method="POST"
    enctype="multipart/form-data"
  >
    <input type="file" name="file" required />
    <button>Upload</button>
  
    {#if form}
      <p>uploaded {form.uploaded}</p>
    {/if}
  </form>
  <img src="https://upycerielubb7kk4.public.blob.vercel-storage.com/TZ-7-3jwUiCpzETQkV2cLDDGGNwuLOhYF2O.jpg" alt="" srcset="">