<template>
    <button :class="buttonClass" >
      {{ buttonText }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'BaseButton',
    props: {
      buttonText: {
        type: String,
        required: true
      },
      buttonClass: {
        type: String,
        default: 'btn-default'
      }
    },
  }
  </script>
  
  <style scoped>
  .btn-default {
    background-color: gray-light;
    color: #6A797C;
    border: none;
    font-size: 16px;
    padding: 10px 14px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
    font-family: Jost;

font-style: normal;
font-weight: 500;
line-height: 150%;
  }
  
  .btn-default:hover {
    background-color: #FFE5E1;
    color: #E5361D;
    font-size: 16px;
    padding: 10px 14px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  </style>
  