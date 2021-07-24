<template>
  <b-form>
    <BaseCard class="form-container">
      <b-form-group label="Email" label-for="email-input" description="We'll never share your email with anyone else.">
        <b-form-input id="email-input" type="email" placeholder="Please enter email" required />
      </b-form-group>
      <b-form-group label="Name" label-for="name-input">
        <b-form-input id="name-input" type="text" placeholder="Please enter your name" required />
      </b-form-group>
      <b-form-group label="Content" label-for="content-input">
        <b-form-textarea id="content-input" rows="3" max-rows="7" placeholder="Please enter the thing you want to discuss..." />
      </b-form-group>
      <div class="left-btn-container">
        <b-button class="primary-btn">
          Submit
        </b-button>
      </div>
    </BaseCard>
  </b-form>
</template>

<script>
export default {

}
</script>

<style lang="scss"  scoped>
.form-container{
  padding:16px;
  width:60%;
  margin: 10% auto
}

</style>
