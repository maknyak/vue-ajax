<template>
  <div class="card">
    <div class="card-header bg-white">
      <div class="d-flex">
        <div class="flex-grow-1 font-weight-bold" style="line-height: 28px;">
          <slot name="card-header-title"></slot>
        </div>
        <slot name="card-header-action"></slot>
      </div>
    </div>
    <slot name="card-body"></slot>
    <slot name="card-footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'card'
}
</script>
