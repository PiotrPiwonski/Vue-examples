<template>
  <div class="candidates">
    <div
        v-for="(candidate, index) in candidatesWithParty"
        :key="candidate.id"
        class="candidates__card"
    >
      <p>Candidate {{index + 1}}</p>
      <p>Name: {{candidate.firsName}} {{candidate.lastName}}</p>
      <p>Age: {{candidate.age}}</p>
      <p v-if="candidate.party">Party: {{candidate.party}}</p>
      <div v-if="candidate.opinionPool">
        Opinion pool: <progress max="100" :value="candidate.opinionPool"></progress>
        {{candidate.opinionPool}}%
      </div>
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: 'MyAwsomeComponet',
  setup() {
    const candidates = ref([
      {
        id: 1,
        firsName: 'Robert',
        lastName: 'Biedroń',
        age: 44,
        party: 'Wiosna Roberta Biedronia',
        opinionPool: 4,
      },
      {
        id: 2,
        firsName: 'Krzysztof',
        lastName: 'Bosak',
        age: 37,
        party: 'Konfederacja Wolność i Niepodległość',
        opinionPool: 7,
      },
      {
        id: 3,
        firsName: 'Andrzej',
        lastName: 'Duda',
        age: 47,
        party: null,
        opinionPool: 49,
      },
      {
        id: 4,
        firsName: 'Szymon',
        lastName: 'Hołownia',
        age: 43,
        party: null,
        opinionPool: 22,
      },
      {
        id: 5,
        firsName: 'Marek',
        lastName: 'Jakubiak',
        age: 61,
        party: 'Federacja dla Rzeczypospolitej',
        opinionPool: null,
      },
      {
        id: 6,
        firsName: 'Małgorzata',
        lastName: 'Kidawa-Błońska',
        age: 63,
        party: 'Platforma Obywatelska',
        opinionPool: 5,
      },
      {
        id: 7,
        firsName: 'Władysław',
        lastName: 'Kosiniak-Kamysz',
        age: 38,
        party: 'Polskie Stronnicwo Ludowe',
        opinionPool: 12,
      },
      {
        id: 8,
        firsName: 'Mirosłąw',
        lastName: 'Piotrowski',
        age: 64,
        party: 'Ruch Prawdziwa Europa',
        opinionPool: null,
      },
      {
        id: 9,
        firsName: 'Paweł',
        lastName: 'Tanajno',
        age: 44,
        party: null,
        opinionPool: 1,
      },
      {
        id: 10,
        firsName: 'Stanisław',
        lastName: 'Żółtek',
        age: 64,
        party: 'Kongres Nowej Prawicy',
        opinionPool: null,
      },
    ])

    const candidatesWithParty = computed(() => candidates.value.filter(({party}) => party))


    return { candidates, candidatesWithParty }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
.candidates {
  font-family: arial;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 25px;
  max-width: 1200px;
  margin: 0 auto;

  &__card {
    border: 1px solid black;
    padding: 10px;
  }
}
</style>
