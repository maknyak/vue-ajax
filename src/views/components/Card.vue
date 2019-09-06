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
    <div class="table-responsive">
      <slot name="card-body"></slot>
    </div>
    <div class="card-footer text-right">
      <slot name="card-footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card'
}
</script>
